// Navbar.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

//Global contex
import { useGlobalContext } from "../hooks/useGlobalContext";

//firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user } = useGlobalContext();

  const signOutProfile = async () => {
    await signOut(auth);
    toast.success("See you soon...");
  };

  return (
    <div className="container max-w-[1240px] mr-auto ml-auto">
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
      <nav className="flex flex-col md:flex-row justify-between items-center bg-white p-4 ">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="./uzum-market-logo.png"
            alt="Uzum Market Logo"
            className="h-10 mr-4"
          />

          <div
            data-tip="will be soon..."
            className="tooltip px-4 py-2 bg-purple-100 text-purple-600 rounded cursor-pointer"
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
        <div className="flex coloum items-center text-gray-600">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" m-1">
              <div className="avatar flex-col">
                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
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
            <button className="ml-0 md:ml-4 mb-4 md:mb-0">
              {" "}
              <FontAwesomeIcon className="mr-2" icon={faHeart} />
              Избранное
            </button>
          </div>

          <div className="tooltip" data-tip="will be soon...">
            <button className="relative ml-0 md:ml-4">
              <FontAwesomeIcon className="mr-2" icon={faBagShopping} />
              Корзина
              <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs rounded-full px-1.5">
                1
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
