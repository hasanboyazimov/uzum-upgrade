import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "incement",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <div>
      <button className="btn" onClick={increment}>+</button>
      <span className="p-2">{state.count}</span>
      <button className="btn" onClick={decrement}>-</button>
    </div>
  );
}

export default Home;
