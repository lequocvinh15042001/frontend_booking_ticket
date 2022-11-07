import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./UserInformation.scss";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, Navigate } from "react-router-dom";
// import InfoTicketBooked from "./InfoTicketBooked/InfoTicketBooked";
import EditInformation from "./EditInformation/EditInformation";
import { qlyNguoiDung } from "../../services/QuanLyNguoiDungServices";
import { userLogin } from "../../config/setting";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from '../../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../../constants/userConstants'

export default function Information() {
  const info = JSON.parse(localStorage.getItem("userLogin"));
  console.log("userLogin", info);
  let [thongTin, setThongTin] = useState([]);
  // useEffect(() => {
  //   qlyNguoiDung
  //     .layThongTinTaiKhoan(JSON.parse(localStorage.getItem(userLogin)))
  //     .then((result) => {
  //       setThongTin(result.data);
  //     });
  // }, []);
  const dispatch = useDispatch()

  const userInfo = useSelector((state) => state.userLogin.userInfo)
  console.log(userInfo);
  
  const userDetails = useSelector((state) => state.userDetails)
  console.log(userDetails);
  const { loading, error, user } = userDetails

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    // if (!userInfo) {
    //   history.push('/login')
    // } else {
    //   if (!user || !user.username || success) {
    //     dispatch({ type: USER_UPDATE_PROFILE_RESET })
    //     dispatch(getUserDetails('profile'))
    //     dispatch(listMyOrders())
    //   } else {
    //     setName(user.username)
    //     setEmail(user.email)
    //   }
    // }
    dispatch(getUserDetails(userInfo.email))
    setThongTin(user);
  }, [dispatch])

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   if (password !== confirmPassword) {
  //     setMessage('Passwords do not match')
  //   } else {
  //     dispatch(updateUserProfile({ id: user._id, name, email, password }))
  //   }
  // }
  //   useEffect(() => {
  //   qlyNguoiDung
  //     .layThongTinTaiKhoanByEmail(info.email)
  //     .then((result) => {
  //       setThongTin(result.data);
  //     });

  // }, []);
  console.log("Đã lấy được thông tin người dùng từ API: ", thongTin);
  const admin = info.roles[0];
  //console.log("Amdin: ", admin);

  const renderAdmin = () => {
    if (admin === "ROLE_ADMIN") {
      return (
        <button className="btn btn-block btn__admin">
          <NavLink className="admin__link" to="/dashboard">
              Admin Page
          </NavLink>
        </button>
      );
    } else {
      return;
    }
  };

  if (!localStorage.getItem("userLogin")) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="profile container-fluid text-light">
      <div className="row">
        <div className="col-12 col-avt">
          <div className="img-avt p-5 text-center">
            {/* <img src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg" alt="hinhanh" /> */}
            <img src={user.image} alt="hinhanh" />
          </div>
          <div className="tableInfo">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-left bg-dark">
                <h2 className="info-title">My Information</h2>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell >
                          Username:
                        </TableCell>
                        <TableCell>
                          {user.username}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell >
                          Full name:
                        </TableCell>
                        <TableCell>
                          {user.fullname}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Email:
                        </TableCell>
                        <TableCell >
                          {user.email}
                        </TableCell>
                      </TableRow>
                      {/* <TableRow>
                        <TableCell component="th" scope="row">
                          <i className="fa fa-user"></i>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {info.maLoaiNguoiDung}
                        </TableCell>
                      </TableRow> */}
                    </TableBody>
                  </Table>
                </TableContainer>
                {renderAdmin()}
              </div>
              <div className="col-md-7 col-sm-12 col-right bg-dark">
                <div id="accordion">
                  <EditInformation user={thongTin}/>
                  {/* <InfoTicketBooked thongTin={thongTin} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
