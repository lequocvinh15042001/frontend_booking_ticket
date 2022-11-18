import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/Login";
import { userLogin } from "../config/setting";
const Login = (props) => {
  const navigate = useNavigate();
  if (localStorage.getItem(userLogin)) {
    navigate("/");
  }
  return <LoginForm navigator={props} />;
};

export default Login;
