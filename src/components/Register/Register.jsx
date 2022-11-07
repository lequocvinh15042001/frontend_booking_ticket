import React, { Component } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Register/Register.scss";
import { qlyNguoiDung } from "../../services/QuanLyNguoiDungServices";
// import useToggleValue from './../../hooks/useToggleValue';
//import { groupID } from "../../config/setting";
import swal from "sweetalert";
import { register } from "../../actions/userActions";
// const navigate = useNavigate();
// const dispatch = useDispatch();
export default class Register extends Component {
  state = {
    values: {
      name: "",
      username: "",
      email: "",
      password:"",
      // maLoaiNguoiDung: "KhachHang",
      // maNhom: groupID,
    },
    errors: {
      name: "",
      username: "",
      email: "",
      password:"",
    },
  };
  handleChangeInput = (event) => {
    var { value, name } = event.target;
    //tạo ra object this.state.values mới
    let newValues = {
      ...this.state.values,
      [name]: value,
    };

    //set trường hợp rỗng
    //tạo ra object this.state.errors mới
    let newErrors = {
      ...this.state.errors,
      [name]: value === "" ? "Not be empty!" : "",
    };

    if (name === "email") {
      let regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
      if (value.match(regexEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Invalid email!";
      }
    }
    //setState lại values và errors
    this.setState({ values: newValues, errors: newErrors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    let { values, errors } = this.state;
    for (let key in values) {
      if (values[key] === "") {
        // kiểm tra lỗi
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("Invalid information!");
      return;
    }

    let { navigator } = this.props;
    qlyNguoiDung
      .dangKy(values)
      .then((res) => {
        swal({
          title: "Register Success!",
          icon: "success",
          button: "OK",
        });
        navigator.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        swal({
          title: err.response.data.message,
          text: "Fill in the information again!",
          icon: "warning",
          button: "OK",
        });
      });
    //dispatch(register(values))
  };

  render() {
    // const { value: showPassword, handleToggleValue: handleTogglePassword } =
    // useToggleValue(false);
    
    return (
      <section className="backgroundBody">
        <div className="container-fluid">
          <div className="registerForm">
            <div className="img__logo">
              <NavLink className="img__link" to="/">
                <span className="text-logo">Golden Movie Ticket Booking</span>
              </NavLink>
            </div>
            <div className="formSocial">
              <form className="formRegister">
                <div className="form-group">
                  <input
                    className="input"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.username}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="password"
                    type="password"
                    //type={`${showPassword ? "text" : "password"}`}
                    placeholder="Password"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.password}
                  </span>
                  {/* <IconEyeToggle
                    open={showPassword}
                    onClick={handleTogglePassword}
                ></IconEyeToggle> */}
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.name}</span>
                </div>
                <div className="form-group">
                  <input
                    className="input"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">{this.state.errors.email}</span>
                </div>
                {/* <div className="form-group">
                  <input
                    className="input"
                    name="soDT"
                    type="text"
                    placeholder="Số điện thoại"
                    onChange={this.handleChangeInput}
                  />
                  <span className="text-danger">
                    {this.state.errors.soDienThoai}
                  </span>
                </div> */}
                <div className="form-group">
                  <button
                    className="btnLogin"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Register
                  </button>
                </div>
                <div className="form-group">
                  <NavLink className="text-light" to="/login">
                    Do you have an account?
                  </NavLink>
                </div>
              </form>
            </div>
            <NavLink className="close__btn" to="/"></NavLink>
          </div>
        </div>
      </section>
    );
  }
}
