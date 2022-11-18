import React, { useState, useEffect } from "react";
import { userLogin } from "../../../config/setting";
import swal from "sweetalert";
import { qLyAdminService } from "../../../services/QuanLyAdminService";
import { qlyNguoiDung } from "../../../services/QuanLyNguoiDungServices";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import {getUserDetails} from "../../../actions/userActions";
import { useSelector } from "react-redux";

export default function EditInformation() {

  const [open, setOpen] = useState(false);

  const userDetails = useSelector((state) => state.userDetails)
  //console.log(userDetails);
  const { loading, error, user } = userDetails

  const info = JSON.parse(localStorage.getItem(userLogin));

  //console.log("Thông tin cập nhật bên phải: ", info);
  let [account] = useState({
    email: info.email,
  });
  //console.log(info.email);

  //console.log("Sau khi lấy thông tin qua email: ", user);
  let [state, setState] = useState({
    values: {
      fullname: "",
      username: "",
      email: "",
      roles: "",
      password: "",
    },
    errors: {
      fullname: "",
      username: "",
      email: "",
      roles: "",
      password: "",
    },
  });
  useEffect(() => {
    // qlyNguoiDung
    //   .layThongTinTaiKhoanByEmail(account.email)
    //   .then((res) => {
    //     console.log("response: ",res.data);
    //     setState({
    //       values: res.data,
    //       errors: {
    //         fullname: "",
    //         username: "",
    //         email: "",
    //         roles: "",
    //         password: "",
    //       },
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    getUserDetails(info.email);
    setState({
      values: user,
      errors: {
        fullname: "",
        username: "",
        email: "",
        roles: "",
        password: "",
      },
    });
  }, [loading, user]);

  //console.log("state: ", state);

  const handleChangeInput = (event) => {
    var { value, name } = event.target;
    let newValues = {
      ...state.values,
      [name]: value,
    };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "Not be empty!" : "",
    };

    if (name === "email") {
      let regexEmail =
        "^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$";
      if (value.match(regexEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Invalid Email!";
      }
    }
    setState({ values: newValues, errors: newErrors });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    let { values, errors } = state;
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
      alert("Invalid Information!");
      return;
    }
    // gọi api hoạc dispatch redux

    let infoUserUpdate = {
      username: values.username,
      password: values.password,
      fullname: values.fullname,
      email: values.email,
    };
    qLyAdminService
      .capNhatThongTinNguoiDung(infoUserUpdate)
      .then((res) => {
        swal({
          title: "Update information Success!",
          icon: "success",
          button: "OK",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        swal({
          title: err.response.data,
          text: "Fill information again!",
          icon: "warning",
          button: "OK",
        });
      });
  };

  return (
    <React.Fragment>
    <div className="card">
      <div className="card-header" id="headingTwo">
      <div>
      <Button
        className="btn btn-primary"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Cick Here To Update Information
      </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
        <div className="card-body" style={{ minHeight: '28rem' }}>
          <form className="formRegister" onSubmit={handleSubmit}
            style={{
              marginBottom:"1rem",
              marginTop:"1rem",
              color:"black",
            }}>
            <div className="form-group">
            <Form.Label>Username</Form.Label>
              <input
                className="input"
                name="username"
                placeholder="Username"
                value={state.values.username}
                onChange={handleChangeInput}
                disabled
                style={{
                  marginBottom:"1rem",
                }}
              />
              {/* <span className="text-danger">{state.errors.user.username}</span> */}
            </div>
            <div className="form-group">
            <Form.Label>Password</Form.Label>
              <input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
                value={state.values.password}
                onChange={handleChangeInput}
                style={{
                  marginBottom:"1rem",
                }}
              />
              {/* <span className="text-danger">{state.errors.user.password}</span> */}
            </div>
            <div className="form-group">
            <Form.Label>Full name</Form.Label>
              <input
                className="input"
                name="fullname"
                type="text"
                placeholder="Full name"
                value={state.values.fullname}
                onChange={handleChangeInput}
                style={{
                  marginBottom:"1rem",
                 
                }}
              />
              {/* <span className="text-danger">{state.errors.user.fullname}</span> */}
            </div>
            <div className="form-group">
            <Form.Label>Email</Form.Label>
              <input
                className="input"
                name="email"
                placeholder="Email"
                value={state.values.email}
                onChange={handleChangeInput}
                style={{
                  marginBottom:"1rem",
                }}
              />
              {/* <span className="text-danger">{state.errors.user.email}</span> */}
            </div>
            <div className="form-group">
              <Button
                className="btn btn-primary"
                type="submit"
                style={{
                  color: "white",
                  backgroundColor: "#000000",
                  borderRadius: "5px",
                  marginTop:"1rem",
                  padding: "10px",
                  width:"10rem",
                  marginRight:"1rem"
                }}
              >
                Update
              </Button>
              <Button
                className="btn"
                href="/profile"
                style={{
                  color: "white",
                  backgroundColor: "#ff0000",
                  marginTop:"1rem",
                  padding: "10px",
                  width:"10rem",
                }}
                onClick={() => setOpen(!open)}
              >
                Cancel
              </Button>
            </div>
          </form>
          </div>
            </div>
          </Collapse>
      </div>
      </div>
      
    </div>
    </React.Fragment>
  );
}
