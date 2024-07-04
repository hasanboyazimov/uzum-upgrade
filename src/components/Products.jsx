import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Products({ products }) {
  return (
    <div className="flex justify-between flex-wrap">
      {products &&
        products.map((product) => {
          return <Card key={product.id} product={product}/>
        })}
    </div>
  );
}

export default Products;
