import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { useGlobalContext } from "../hooks/useGlobalContext";

const Navbar = () => {
  const { user, totalProduct } = useGlobalContext();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const signOutProfile = async () => {
    await signOut(auth);
    toast.success("See you soon...");
  };

  return (
    <div
      className={`container max-w-[1240px] mx-auto ${
        theme === "dark" ? "dark:text-white dark:bg-slate-800" : ""
      }`}
    >
      <div className="hidden bg-gray-100 p-2 text-sm lg:flex justify-between items-center">
        <div>
          <span>
            Город: <span className="font-bold">Ташкент</span>
          </span>
          <span className="ml-4 cursor-pointer">Пункты выдачи</span>
        </div>
        <div>
          <span className="ml-4 cursor-pointer text-purple-600">
            Продавайте на Uzum
          </span>
          <span className="ml-4 cursor-pointer">Вопрос-ответ</span>
          <span className="ml-4 cursor-pointer">Мои заказы</span>
          <span className="ml-4 cursor-pointer">Русский</span>
        </div>
      </div>
      <nav className="flex flex-col md:flex-row justify-between items-center bg-white p-4 dark:bg-slate-800">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/">
            <h2 className="text-2xl mr-5 font-semibold hover:bg-slate-200 p-1 rounded">
              {" "}
              Sifatli <span className="text-blue-600">Shop</span>
            </h2>
          </Link>

          <div
            data-tip="will be soon..."
            className="tooltip px-4 py-2 bg-purple-100 text-purple-600 rounded cursor-pointer hidden md:block sm:block lg:block xl:block"
          >
            Каталог
          </div>
        </div>
        <div className="flex items-center w-full max-w-lg mx-4 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Искать товары и категории"
            className="w-full px-4 py-2 border border-gray-300 rounded-l outline-none"
          />
          <button className="px-4 py-2 border border-gray-300 border-l-0 rounded-r bg-gray-100">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="flex coloum items-center text-gray-600 justify-between h-auto dark:text-white">
          <div className="dropdown">
            <div tabIndex={totalProduct} role="button" className="m-1">
              <div className="avatar flex-col">
                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                  <img src={user.photoURL} alt="User" />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow dark:bg-gray-700 dark:text-white"
            >
              <li>
                <div>
                  <p>{user.displayName}</p>
                </div>
              </li>
              <li>
                <button onClick={signOutProfile} className="btn btn-secondary">
                  Log out
                </button>
              </li>
            </ul>
          </div>

          <div className="tooltip" data-tip="will be soon...">
            <button className="ml-0 md:ml-4">
              <FontAwesomeIcon className="mr-2" icon={faHeart} />
              Избранное
            </button>
          </div>

          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {totalProduct}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow dark:bg-gray-700 dark:text-white"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">{totalProduct} Items</span>
                  <span className="text-info">Subtotal: $...</span>
                  <div className="card-actions">
                    <Link to="/cart">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className="swap swap-rotate ml-4">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05A1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
