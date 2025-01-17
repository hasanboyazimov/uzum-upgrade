import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Card({ product }) {
  const { addToCart } = useGlobalContext();
  return (
    <>
      <Link to={"/" + product.id}>
        <div className="card hover:shadow-xl relative col-span-12 sm-20:col-span-12 sm-23:col-span-12 sm-37:col-span-12 md-960:col-span-12 lg-64:col-span-3 card-compact bg-base-100 w-[160px] h-[320px] md:h-[400px] lg:h-[400px] xl:h-[400px] sm:w-[200px] md:w-[232px] lg:w-[232px] xl:w-[232px] mb-5 shadow-md transition-all ease-in-out">
          <figure className="overflow-hidden">
            <img
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={product.thumbnail}
              alt={product.title}
            />
          </figure>
          <div className="card-body relative">
            <h2 className="card-title font-light text-base">{product.title}</h2>
            <span className="text-xs">
              <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
              {product.rating} (54 оценки)
            </span>
            <span className="text-center max-w-[100px] text-xs rounded bg-yellow-300">
              {(product.price / 12).toFixed(2)} $ / month
            </span>
            <div className="card-actions justify-between">
              <div>
                <div className="line-through text-gray-400 text-xs">
                  {(product.price + 10).toFixed(2)}$
                </div>
                <div>{product.price}$</div>
              </div>
              <button
                onClick={() => addToCart(product, amount == 1)}
                className="border border-gray-400 rounded-full p-[4px] hover:bg-gray-200"
              >
                <svg
                  data-v-40da8b10=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ui-icon add-cart-icon"
                >
                  <path
                    d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                    fill="black"
                  ></path>
                  <path
                    d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
