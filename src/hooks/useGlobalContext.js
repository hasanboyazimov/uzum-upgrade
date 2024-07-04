import { useContext } from "react";
import { GlobalContex } from "../context/GlobalContex";

export const useGlobalContext = () => {
  const contex = useContext(GlobalContex);

  if (!contex) {
    throw new Error("useGlobalContex() must be in the GlobalContexProvider()");
  }

  return contex;
};
