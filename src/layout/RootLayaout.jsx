import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { Fragment } from "react";

function RootLayout() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default RootLayout;
