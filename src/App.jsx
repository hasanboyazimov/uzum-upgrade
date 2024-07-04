import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//pages
import { Home, About, Contact, Login, Register } from "./pages";

//layouts
import RootLayout from "./layout/RootLayaout";
import ErrorPage from "./pages/ErrorPage";

//actions
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";

// componet
import Protect from "./components/Protect";

//context
import {useGlobalContext} from "./hooks/useGlobalContext";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";


function App() {
  const  {user, dispatch, isAuthReady}  = useGlobalContext();
  console.log(user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protect user={user}>
          <RootLayout />
        </Protect>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/About",
          element: <About />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/register",
      element: user ? <Navigate to={"/"} /> : <Register />,
      action: RegisterAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({type: "LOG_IN", payload: user})
      dispatch({type: "IS_AUTH_READY"})
    })
  }, [])

  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
