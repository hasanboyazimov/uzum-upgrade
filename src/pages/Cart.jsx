import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

function Cart() {
  const { products, dispatch } = useGlobalContext();

  const increaseAmount = (product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: products.map((p) =>
        p.id === product.id ? { ...p, amount: p.amount + 1 } : p
      ),
    });
  };

  const decreaseAmount = (product) => {
    if (product.amount > 1) {
      dispatch({
        type: "ADD_PRODUCT",
        payload: products.map((p) =>
          p.id === product.id ? { ...p, amount: p.amount - 1 } : p
        ),
      });
    }
  };

  const deleteProduct = (product) => {
    dispatch({ type: "DELETE_PRODUCT", payload: product.id });
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );

  return (
    <div className="container max-w-[1280px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center ">
            {" "}
            <p className="font-bold text-red-600 mb-5">
              Your cart is empty :(
            </p>{" "}
            <Link className="link" to="/">
              Go to Home Page
            </Link>
          </div>
        ) : (
          <>
            <ul>
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center mb-4 border px-5 py-2"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-xs font-bold">{product.title}</h2>
                      <p className="text-gray-600 text-sm">${product.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => decreaseAmount(product)}
                          className="btn btn-primary text-white px-2 py-1 rounded"
                        >
                          -
                        </button>
                        <span>{product.amount}</span>
                        <button
                          onClick={() => increaseAmount(product)}
                          className="btn btn-primary text-white px-2 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-bold">
                    ${(product.price * product.amount).toFixed(2)}
                  </div>
                  <button
                    onClick={() => deleteProduct(product)}
                    className="text-red-500 font-bold ml-2"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <div className="text-right text-lg font-bold mt-4">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
