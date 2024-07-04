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
import { faL } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true);
        const request = await fetch("https://dummyjson.com/products");
        const data = await request.json();
        setProducts(data.products);
        setIsPending(false);
        throw new Error("Something went wrong!");
      } catch (err) {
        setIsPending(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, ["https://dummyjson.com/products"]);
  return (
    <div className="container max-w-[1240px] mr-auto ml-auto">
      <Carousel />
      <Products isPending={isPending} products={products} />
    </div>
  );
}

export default Home;
