import { createContext, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

let Animation = createContext();

const AOSContext = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  });
  return <Animation.Provider value={{}}>{children}</Animation.Provider>;
};

export default AOSContext;
