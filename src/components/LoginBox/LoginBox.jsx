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

    if (!isLogin && formFields.password !== formFields.confirmPassword) {
      setFormErrors({
        ...formErrors,
        password: "passwords must match",
        confirmPassword: "passwords must match",
      });
      return false;
    }

    if (
      !!formFields.email &&
      !formFields.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      setFormErrors({
        ...formErrors,
        email: "please enter a valid email address",
      });
      return false;
    }
    if (isLogin && !!formFields.username && !!formFields.password) {
      return true;
    }

    if (
      !isLogin &&
      !!formFields.username &&
      !!formFields.password &&
      !!formFields.email &&
      !!formFields.confirmPassword
    ) {
      return true;
    }
    return false;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate("/dashboard");
    if (!isFormValid()) {
      return;
    }

    if (isLogin) {
      const userDetails = {
        username: formFields.username,
        password: formFields.password,
      };
      try {
        const { data } = await axios.post(
          baseUrl + "/users/login",
          userDetails
        );

        localStorage.setItem("token", data.token);
        navigate("/dashboard");
        return;
      } catch (error) {
        setFormErrors({
          ...formErrors,
          password: "unrecognized password",
        });
      }
    }

    //REGISTER
    const newUser = {
      email: formFields.email,
      username: formFields.username,
      password: formFields.password,
    };

    try {
      await axios.post(baseUrl + "/users/register", newUser);
      const user = {
        username: formFields.username,
        password: formFields.password,
      };
      const { data } = await axios.post(baseUrl + "/users/login", user);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
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
          disabled={false}
        />

        <Input
          name="email"
          label="email"
          placeholder="enter email"
          className={isLogin ? "form--login" : "form--register"}
          handleChange={handleChange}
          tabIndex={isLogin ? -1 : 0}
          msg={formErrors.email}
          disabled={isLogin ? true : false}
        />

        <Input
          name="password"
          label="password"
          placeholder="enter password"
          isPassword={true}
          handleChange={handleChange}
          msg={formErrors.password}
          disabled={false}
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
          disabled={isLogin ? true : false}
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
