//react imports
import { createContext, useReducer } from "react";

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

function GlobalContexProvider({ childer }) {
  const [state, dispach] = useReducer(changeState, {
    user: null,
    isAuthReady: false,
    products: [],
    totalProduct: 0,
    totalPrice: 0,
  });
  //   dispach({ type: "LOG_IN", payload: "" });
  return (
    <GlobalContex.Provider value={{ ...state, dispach }}>
      {childer}
    </GlobalContex.Provider>
  );
}

export default GlobalContexProvider;
