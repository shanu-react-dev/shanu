import { useForm } from "react-hook-form";
import LeftSide from "./LeftSide";
import { signupData } from "../field-data/inputFields";

const Register = () => {
  let {
    register,
    formState: { errors },
  } = useForm();

  let { title, fields } = signupData;
  return (
    <div className="register">
      <LeftSide />
      {/* <div className="formBox">
        <h2>
          Sign up to <span>Explore More</span>
        </h2>
        <form>
          <div className="fullName">
            <div className="inputBox">
              <input
                type="text"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
              />
              <label htmlFor="firstName">First Name</label>
              <p></p>
            </div>
            <div className="inputBox">
              <input
                type="text"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
              />
              <label htmlFor="lastName">Last Name</label>
              <p></p>
            </div>
          </div>

          <div className="inputBox">
            <input
              type="text"
              {...register("username", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="inpputBox gender">
            <label>Gender</label>
            <input type="radio" name="gender" id="male" value={"male"} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value={"female"} />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="others" value={"others"} />
            <label htmlFor="others">Others</label>
          </div>

          <div className="inputBox">
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="inputBox">
            <input
              type="tel"
              {...register("contact", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <label htmlFor="contact">Contact</label>
          </div>

          <div className="inputBox">
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="inputBox">
            <input
              type="password"
              {...register("confirmPwd", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
            <label htmlFor="confirmPwd">Confirm Password</label>
          </div>

          <div className="inputBox">
            <input type="file" name="profile" id="profile" />
          </div>

          <div className="inputBox">
            <input type="checkbox" name="acceptTerms" id="acceptTerms" />
            <label htmlFor="acceptTerms">
              I agree to the Terms & Conditions and Privacy Policy
            </label>
          </div>

          <button type="submit">Register Now</button>
        </form>
      </div> */}
      <h2>{title}</h2>
      <form>
        {fields.map((ele, index) => {
          console.log(ele);
          if (ele.name == "firstName" || ele.name == "lastName") {
            return (
              <div className="inputBox">
                <input
                  type="text"
                  {...register(ele.name, {
                    required: {
                      value: true,
                      message: "Required",
                    },
                  })}
                  id={ele.id}
                />
                <label htmlFor={ele.id}>{ele.label}</label>
              </div>
            );
          }
        })}
      </form>
    </div>
  );
};

export default Register;
