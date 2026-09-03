import { useForm } from "react-hook-form";
import LeftSide from "./LeftSide";

const Register = () => {
  let {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="register">
      <LeftSide />
      <div className="formBox">
        <h2>
          Sign up to <span>Explore More</span>
        </h2>
        <form></form>
      </div>
    </div>
  );
};

export default Register;
