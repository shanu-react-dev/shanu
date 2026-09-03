import Logo from "./Logo";
import Navlists from "./Navlists";
import Button from "../../reusable-components/Button";

const Navbar = () => {
  return (
    <div
      className="h-14 w-full flex justify-evenly items-center"
      data-aos="fade-down"
    >
      <Logo />
      <Navlists />
      <Button
        data={{
          label: "Join Us",
          cName: "accountBtn",
          href: "/register",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Navbar;
