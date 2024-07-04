//react imports
import { Children, createContext, useReducer } from "react";

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
    default:
      return state;
  }
};

function GlobalContexProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    isAuthReady: false,
    products: [],
    totalProduct: 0,
    totalPrice: 0,
  });
    // dispatch({ type: "LOG_IN", payload: "" });
  return (
    <GlobalContex.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContex.Provider>
  );
}

export default GlobalContexProvider;
