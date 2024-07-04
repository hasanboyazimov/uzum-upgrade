import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo"
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos]
  }
}

function Home() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSumnit(e) {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO})
    setName('')
  }

  return (
    <>
      <form onSubmit={handleSumnit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default Home;
