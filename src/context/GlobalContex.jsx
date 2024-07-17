import { createContext, useEffect, useReducer } from "react";

export const GlobalContex = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOG_IN":
      return { ...state, user: payload };
    case "LOG_OUT":
      return { ...state, user: null };
    case "IS_AUTH_READY":
      return { ...state, isAuthReady: true };
    case "ADD_PRODUCT":
      return { ...state, products: payload };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case "TOTAL_PRODUCTS_COUNT":
      return { ...state, totalProduct: payload };
    default:
      return state;
  }
};

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    isAuthReady: false,
    products: [],
    totalProduct: 0,
    totalPrice: 0,
  });

  const calculateTotal = () => {
    let totalCount = 0;
    state.products.forEach((product) => {
      totalCount += product.amount || 0; // Ensure amount is defined
    });
    dispatch({ type: "TOTAL_PRODUCTS_COUNT", payload: totalCount });
  };

  const addToCart = (product, amount) => {
    const productWithAmount = { ...product, amount: amount }; // Ensure amount is defined

    const existingProductIndex = state.products.findIndex(
      (prod) => prod.id === productWithAmount.id
    );

    if (existingProductIndex >= 0) {
      const updatedProducts = state.products.map((prod, index) =>
        index === existingProductIndex
          ? { ...prod, amount: prod.amount + productWithAmount.amount }
          : prod
      );
      dispatch({ type: "ADD_PRODUCT", payload: updatedProducts });
    } else {
      const updatedProducts = [...state.products, productWithAmount];
      dispatch({ type: "ADD_PRODUCT", payload: updatedProducts });
    }

    calculateTotal();
  };

  useEffect(() => {
    calculateTotal();
  }, [state.products]);

  return (
    <GlobalContex.Provider value={{ ...state, dispatch, addToCart }}>
      {children}
    </GlobalContex.Provider>
  );
}

export default GlobalContextProvider;
