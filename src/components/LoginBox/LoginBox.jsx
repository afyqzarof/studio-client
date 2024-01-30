import "./LoginBox.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input/Input";
import axios from "axios";
import InputError from "../InputError/InputError";

const LoginBox = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value.trim(),
    });

    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const isFormValid = () => {
    setFormErrors({
      username: !formFields.username ? "this field is required" : "",
      email: !formFields.email ? "this field is required" : "",
      password: !formFields.password ? "this field is required" : "",
      confirmPassword: !formFields.confirmPassword
        ? "this field is required"
        : "",
    });
    console.log(formErrors);

    if (formFields.password !== formFields.confirmPassword) {
      setFormErrors({
        ...formErrors,
        password: "passwords must match",
        confirmPassword: "passwords must match",
      });
    }

    if (
      !!formFields.email &&
      !formFields.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      setFormErrors({
        ...formErrors,
        email: "please enter a valid email address",
      });
    }
    if (isLogin && !!formFields.username && !!formFields.password) {
      return true;
    }
    return false;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
    if (!isFormValid()) {
      return;
    }
    console.log("form valid");

    if (isLogin) {
      const userDetails = {
        username: formFields.username,
        password: formFields.password,
      };
      const { data } = await axios.post(
        baseUrl + "/api/users/login",
        userDetails
      );

      localStorage.setItem("token", data.token);
      return;
    }

    //REGISTER
    const newUser = {
      email: e.target.email.value,
      username: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      await axios.post(baseUrl + "/api/users/register", newUser);
      const user = {
        username: formFields.username,
        password: formFields.password,
      };
      const { data } = await axios.post(baseUrl + "/api/users/login", user);
      localStorage.setItem("token", data.token);
    } catch (error) {
      e.target.reset();
    }
    // navigate("/1/dashboard");
  };
  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <Input
          name="username"
          label="username"
          placeholder="enter username"
          handleChange={handleChange}
          msg={formErrors.username}
        />

        <Input
          name="email"
          label="email"
          placeholder="enter email"
          className={isLogin ? "form--login" : "form--register"}
          handleChange={handleChange}
          tabIndex={isLogin ? -1 : 0}
          msg={formErrors.email}
        />

        <Input
          name="password"
          label="password"
          placeholder="enter password"
          isPassword={true}
          handleChange={handleChange}
          msg={formErrors.password}
        />
        <Input
          name="confirmPassword"
          label="confirm password"
          placeholder="re-enter password"
          className={isLogin ? "form--login" : "form--register"}
          isPassword={true}
          handleChange={handleChange}
          tabIndex={isLogin ? -1 : 0}
          msg={formErrors.confirmPassword}
        />
        <button className="form__btn" type="submit">
          {isLogin ? "login" : "verify account"}
        </button>
      </form>
      <button onClick={handleClick} className="change-form">
        {isLogin ? "are you new around here?" : "not my first time here"}
      </button>
    </div>
  );
};

export default LoginBox;
