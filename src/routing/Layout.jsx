import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import AOSContext from "../contexts/AOS-Context/AOSContext";

const Layout = () => {
  return (
    <div>
      <AOSContext>
        <Navbar />
      </AOSContext>
      <Outlet />
    </div>
  );
};

export default Layout;
