import { useContext } from "react";
import AnkiContext from "../context/AnkiProvider";

export const useAnki = () => {
  return useContext(AnkiContext);
};

export default useAnki;
