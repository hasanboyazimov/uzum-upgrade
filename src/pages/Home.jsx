import React, { useReducer, useState } from "react";

const ACTIONS = {};

function reducer(state, action) {}

function Home() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSumnit() {}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default Home;
