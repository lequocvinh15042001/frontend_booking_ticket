import axios from "axios";
import {auth, token, movie } from "../config/setting";
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
  layThongTinTaiKhoan = (taiKhoan) => {
    return axios({
      url: `${movie}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: taiKhoan,
    });
  };
  datVe = (thongTinDatVe) => {
    return axios({
      url: `${movie}/quanlydatve/datve`,
      method: "POST",
      data: thongTinDatVe,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };

  layBinhLuan = () => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/comment",
      method: "GET",
    });
  };

  themBinhLuan = (binhLuan) => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/comment",
      method: "POST",
      data: binhLuan,
    });
  };
  thongTinTaiKhoan = (taiKhoan) => {
    return axios({
      url: `${movie}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: taiKhoan,
    });
  };
}
export const qlyNguoiDung = new QuanLyNguoiDung();
