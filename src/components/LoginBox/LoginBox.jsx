import "./LoginBox.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input/Input";
import axios from "axios";

const LoginBox = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formFields, setFormFields] = useState({
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
      [e.target.name]: e.target.value,
    });
    console.log(formFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    // console.log(baseUrl);

    const newUser = {
      email: e.target.email.value,
      username: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      await axios.post(baseUrl + "/api/users/register", newUser);
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
        />
        <Input
          name="email"
          label="email"
          placeholder="enter email"
          className={isLogin ? "form--login" : "form--register"}
          handleChange={handleChange}
          tabIndex={isLogin && -1}
        />
        <Input
          name="password"
          label="password"
          placeholder="enter password"
          isPassword={true}
          handleChange={handleChange}
        />
        <Input
          name="confirmPassword"
          label="confirm password"
          placeholder="re-enter password"
          className={isLogin ? "form--login" : "form--register"}
          isPassword={true}
          handleChange={handleChange}
          tabIndex={isLogin && -1}
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
