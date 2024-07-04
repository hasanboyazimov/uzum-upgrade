import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { error } from "console";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log(id)
    const fetchData = async () => {
      const request = fetch("https://dummyjson.com/product/" + id);
      const data = request.json();
      setProduct(data);
    };
  }, []);

  return (
    <div className="flex p-4 max-w-[1240px] mx-auto">
      {/* Left Image Gallery */}
      <div className="w-1/4">
        <div className="flex flex-col space-y-2">
          <div className="carousel rounded-box w-64">
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Product Details */}
      <div className="w-3/4 pl-4">
        <h1 className="text-xl font-bold">Газированный напиток Pepsi, 2 л</h1>
        <div className="text-gray-500">
          Продавец: <span className="text-black">PepsiCo</span>
        </div>
        <div className="text-gray-500">
          Доставка: <span className="text-black">1 день, бесплатно</span>
        </div>
        <div className="my-2">
          <span className="text-2xl text-yellow-500">14 000 сум</span>
          <span className="line-through text-gray-500 ml-2">18 000 сум</span>
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
          От 1 400 сум/мес в рассрочку
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Добавить в корзину
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">
            Купить в 1 клик
          </button>
        </div>
        <div className="text-gray-500 mt-4">
          Быстрая доставка от 1 дня В пункты выдачи Uzum или курьером
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
