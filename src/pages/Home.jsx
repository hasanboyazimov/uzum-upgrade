// import React, { useReducer, useState } from "react";

// const ACTIONS = {
//   ADD_TODO: "add-todo"
// };

// function reducer(todos, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...todos]
//   }
// }

// function Home() {
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");

//   function handleSumnit(e) {
//     e.preventDefault();
//     dispatch({type: ACTIONS.ADD_TODO})
//     setName('')
//   }

//   return (
//     <>
//       <form onSubmit={handleSumnit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//       </form>
//     </>
//   );
import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import Carousel from "../components/Carousel";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    try {
      fetch("https://dummyjson.com/products")
        .then((data) => data.json())
        .then((products) => setProducts(products.products));

      throw new Error("Something went wrong!");
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  return (
    <div className="container max-w-[1240px] mr-auto ml-auto">
      <Carousel />
      <Products products={products} />
    </div>
  );
}

export default Home;
