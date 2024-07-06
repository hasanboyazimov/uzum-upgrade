import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
// import { Skeleton } from "../components/Skeleton";

function Products({ products, isPending }) {
  return (
    <div className="flex justify-around md:justify-between lg:justify-between xl:justify-between flex-wrap ">
      {/* {!products && <Skeleton />} */}

      {products &&
        products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
    </div>
  );
}

export default Products;
