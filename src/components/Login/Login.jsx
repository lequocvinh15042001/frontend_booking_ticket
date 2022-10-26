import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { userLogin, token } from "../../config/setting";
import { qlyNguoiDung } from "../../services/QuanLyNguoiDungServices";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungActions";
import useToggleValue from './../../hooks/useToggleValue';
import swal from "sweetalert";
import IconEyeToggle from "../Icons/IconEyeToggle";
const Login = (props) => {
  let { navigator } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [user, setUser] = useState({
    values: {
      usernameOrEmail: "",
      password: "",
    },
    errors: {
      usernameOrEmail: "",
      password: "",
    },
  });
  const handleChangeInput = (event) => {
    var { value, name } = event.target;
    let newValues = { ...user.values, [name]: value };
    let newErrors = {
      ...user.errors,
      [name]: value === "" ? "Not be empty!" : "",
    };
    setUser({ values: newValues, errors: newErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    qlyNguoiDung
      .dangNhap(user.values)
      .then((res) => {
        localStorage.setItem(userLogin, JSON.stringify(res.data));
        console.log(res.data);
        localStorage.setItem(token, res.data.accessToken);
        dispatch(dangNhapAction(res.data.usernameOrEmail));
        swal({
          title: "Login Success!",
          text: "Hi, " + res.data.username,
          icon: "success",
          button: "OK",
        });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        swal({
          title: err.response.data.error,
          text: "Incorrect username or password!",
          icon: "error",
          button: "OK",
        });
      });
  };
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
  useToggleValue(false);
  return (
    <section className="backgroundBodyUser">
      <div className="container-fluid">
        <div className="loginForm">
          <NavLink className="img__link" to="/">
            <div className="img__logo">
              <span className="text-logo">Golden Movie Ticket Booking</span>
            </div>
          </NavLink>
          <div className="formMessage">
            Sign in for more offers, ticket purchases
            <br />
            and security information!
          </div>
          <div className="formSocial">
            <form className="formLogin" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="input"
                  name="usernameOrEmail"
                  placeholder="Username or Email"
                  onChange={handleChangeInput}
                />
                <span className="text-danger">{user.errors.username}</span>
              </div>
              <div className="form-group">
                <input
                  className="input"
                  name="password"
                  //type="password"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Password"
                  onChange={handleChangeInput}
                />
                <IconEyeToggle
                    open={showPassword}
                    onClick={handleTogglePassword}
                ></IconEyeToggle>
                <span className="text-danger">{user.errors.password}</span>
              </div>
              <div className="form-group">
                <button className="btnLogin" type="submit">
                  Login
                </button>
              </div>
              <div className="form-group">
                <NavLink className="text-light" to="/register">
                    Do not have an account?
                </NavLink>
              </div>
            </form>
          </div>
          <NavLink className="close__btn" to="/"></NavLink>
        </div>
      </div>
    </section>
  );
};

export default Login;
