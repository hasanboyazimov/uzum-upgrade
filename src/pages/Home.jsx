//react imports
import React, { useEffect, useState } from "react";

//components
import Products from "../components/Products";
import Carousel from "../components/Carousel";

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
