import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Global context
import { useGlobalContext } from "../hooks/useGlobalContext";
import toast from "react-hot-toast";

function SingleProduct() {
  const { addToCart } = useGlobalContext();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("https://dummyjson.com/product/" + id);
      const data = await request.json();
      setProduct(data);
    };
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, amount);
    setAmount(0); // Reset amount to 0 after adding to cart
    toast.success("added");
  };

  return (
    <>
      {product && (
        <div className="flex p-4 max-w-[1240px] mx-auto">
          <div
            key={product.id}
            className="flex flex-col sm:flex-row sm:justify-between md:flex-row md:justify-between lg:flex-row xl:flex-row"
          >
            {/* Left Image Gallery */}
            <div className="w-1/4">
              <div className="flex flex-col space-y-2">
                <div className="carousel rounded-box w-64">
                  {product.images &&
                    product.images.map((image, index) => (
                      <div
                        key={index}
                        className="carousel-item w-full"
                      >
                        <img
                          src={image}
                          className="w-full"
                          alt="Product Image"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right Product Details */}
            <div className="w-50% pl-4">
              <h1 className="text-xl font-bold">{product.title}</h1>
              <div className="text-gray-500">
                Продавец: <span className="text-black">{product.brand}</span>
              </div>
              <div className="text-gray-500">
                Доставка: <span className="text-black">1 день, бесплатно</span>
              </div>
              <div className="my-2">
                <span className="text-2xl text-yellow-500">
                  ${product.price}
                </span>
                <span className="line-through text-gray-500 ml-2">
                  {(
                    product.price *
                    (1 + product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <button className="bg-red-500 text-white px-2 py-1 rounded">
                  Рассрочка | x2
                </button>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded">
                  Original
                </span>
              </div>
              <div className="bg-yellow-100 text-yellow-700 px-2 py-1 mb-4">
                От {(product.price / 12).toFixed(2)} $/мес в рассрочку
              </div>
              <div className="flex space-x-2">
                <div className="flex items-center gap-2">
                  <button
                    disabled={amount === 0}
                    onClick={() => setAmount((prev) => prev - 1)}
                    className="btn btn-primary"
                  >
                    -
                  </button>
                  <p>{amount}</p>
                  <button
                    onClick={() => setAmount((prev) => prev + 1)}
                    className="btn btn-primary"
                  >
                    +
                  </button>
                </div>
                <button
                  disabled={!amount}
                  onClick={handleAddToCart}
                  className="border btn bg-white hover:border-blue-500 hover:bg-white border-blue-500 text-blue-500 px-4 py-2 rounded"
                >
                  Add To Cart
                </button>
              </div>
              <div className="text-gray-500 mt-4">
                Быстрая доставка от 1 дня В пункты выдачи Uzum или курьером
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
