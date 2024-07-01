import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalContexProvider from "./context/GlobalContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <GlobalContexProvider>
    //  {" "}
    <App />
  //  </GlobalContexProvider>
);
