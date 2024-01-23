import "./LoginBox.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input/Input";

const LoginBox = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/1/dashboard");
  };
  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <Input name="username" label="username" placeholder="enter username" />
        <Input
          name="email"
          label="email"
          placeholder="enter email"
          className={isLogin ? "form--login" : "form--register"}
        />
        <Input name="password" label="password" placeholder="enter password" />
        <Input
          name="confirmPassword"
          label="confirm password"
          placeholder="re-enter password"
          className={isLogin ? "form--login" : "form--register"}
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
