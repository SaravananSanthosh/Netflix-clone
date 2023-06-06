import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/hooks/userContext";

const initial = { email: "", password: "" };
const Login = () => {
  const { login } = useUserContext();
  const navigate = useNavigate();

  const handlesubmit = (values, props) => {
    login(values);
    navigate("/browse");
    props.resetForm();
  };

  const validate = (values) => {
    let errors = {};
    if (!values.email) errors.email = "*please enter a email or phonenumber";
    else if (!values.email.endsWith("@gmail.com"))
      errors.email = "*Enter a valid Email";
    if (!values.password) errors.password = "*please enter a valid password";
    else if (values.password.length < 5)
      errors.password = "*please enter above 5 character";
    return errors;
  };

  return (
    <Formik onSubmit={handlesubmit} validate={validate} initialValues={initial}>
      {(check) => {
        return (
          <div className=" h-screen w-full grid justify-center items-center bgimg">
            <div className="mt-[100px] p-2  h-[660px] w-[450px] bg-[#000000d0] text-white">
              <Form>
                <h1 className="text-[40px] ml-[40px]">Sign In</h1>
                <div className="mt-5">
                  <div className="">
                    <div className="relative">
                      <Field
                        className=" bg-[#3e3d3d] p-2 ml-[40px] w-[75%] inptSign"
                        type="email"
                        name="email"
                        id=""
                        placeholder=" "
                      />
                      <label
                        htmlFor=""
                        className="absolute left-[45px] top-[8px] "
                      >
                        Email or Phone number
                      </label>
                      <div>
                        <ErrorMessage name="email">
                          {(errors) => (
                            <span className="text-red-700 ml-[45px]">
                              {errors}
                            </span>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="relative">
                      <Field
                        className=" bg-[#3e3d3d]  p-2  ml-[40px] w-[75%] mt-1 inptSignn"
                        type="password"
                        name="password"
                        id=""
                        placeholder=" "
                      />
                      <label
                        htmlFor=""
                        className="absolute left-[45px] top-[8px] "
                      >
                        password
                      </label>
                      <div className="text-red-600 ml-[40px]">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value={"Sign In"}
                    className="bg-[#e50914] p-2 mt-1  ml-[40px] w-[75%]"
                  />{" "}
                  <div className="mt-2 ml-10">
                    <input type="checkbox" />
                    <label htmlFor="">Remember me</label>
                    <label className="float-right mr-16" htmlFor="">
                      Need help?
                    </label>{" "}
                  </div>
                  <div>
                    <div className="flex ml-[40px]">
                      <h1>New to Netflix?</h1>{" "}
                      <Link className="text-white text-lg" to={"/"}>
                        Sign up now
                      </Link>{" "}
                    </div>
                    <h1 className="ml-[40px]">
                      This page is protected by Google in CAPTCHA to ensure{" "}
                      <br />
                      you're not a bot.{" "}
                      <Link className="text-blue-700 font-bold">
                        Learn more
                      </Link>
                    </h1>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
