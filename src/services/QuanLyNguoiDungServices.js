import axios from "axios";
import {auth, token, movie, user } from "../config/setting";
export class QuanLyNguoiDung {
  dangNhap = (userLogin) => {
    console.log(userLogin);
    return axios({
      url: `${auth}/signin`,
      method: "POST",
      data: userLogin,

    });
  };
  dangKy = (thongTin) => {
    return axios({
      url: `${auth}/signup`,
      method: "POST",
      data: thongTin,
    });
  };
  layThongTinTaiKhoanByEmail = (email) => {
    console.log("đã gửi email: ", email);
    return axios({
      url: `${user}/${email}`,
      method: "GET",
      data: email,
    });
  };

  // layThongTinTaiKhoan = (taiKhoan) => {
  //   return axios({
  //     url: `${user}/`,
  //     method: "POST",
  //     data: taiKhoan,
  //   });
  // };
  // datVe = (thongTinDatVe) => {
  //   return axios({
  //     url: `${movie}/quanlydatve/datve`,
  //     method: "POST",
  //     data: thongTinDatVe,
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem(token),
  //     },
  //   });
  // };

  // layBinhLuan = () => {
  //   return axios({
  //     url: "https://5e9829e75eabe7001681bbfb.mockapi.io/comment",
  //     method: "GET",
  //   });
  // };

  // themBinhLuan = (binhLuan) => {
  //   return axios({
  //     url: "https://5e9829e75eabe7001681bbfb.mockapi.io/comment",
  //     method: "POST",
  //     data: binhLuan,
  //   });
  // };
  // thongTinTaiKhoan = (taiKhoan) => {
  //   return axios({
  //     url: `${user}/QuanLyNguoiDung/ThongTinTaiKhoan`,
  //     method: "POST",
  //     data: taiKhoan,
  //   });
  // };
}
export const qlyNguoiDung = new QuanLyNguoiDung();
