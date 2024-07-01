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

function App() {
  const user = false;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protect user={user}>
          {" "}
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

  return <RouterProvider router={routes} />;
}

export default App;
