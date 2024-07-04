import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Products({ products, isPending }) {
  return (
    <div className="flex justify-between flex-wrap">
      {!products && (
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      )}

      {products &&
        products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
    </div>
  );
}

export default Products;
