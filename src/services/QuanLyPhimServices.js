import axios from "axios";
import { groupID, movie } from "../config/setting";
export class QuanLyPhimServices {
  layDanhSachPhim = () => {
    console.log("lấy phim");
    return axios({
      url: `${movie}/showing`,
      method: "GET",
    });
  };
  layThongTinPhim = (maPhim) => {
    return axios({
      url: `${movie}/details?movieId=${maPhim}`,
      method: "GET",
    });
  };
  layHeThongRap = () => {
    return axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
  };

  layCumRapTheoHeThong = () => {
    return axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09`,
      method: "GET",
    });
  };

  // layThongTinCumRapTheoHeThong = (maHeThongRap) => {
  //   return axios({
  //     url: `${movie}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
  //     method: "GET",
  //   });
  // };

  layThongTinPhongVe = (maLichChieu) => {
    return axios({
      url: `${movie}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });
  };
  layTinTuc = () => {
    return axios({
      url: "https://5e9829e75eabe7001681bbfb.mockapi.io/news",
      method: "GET",
    });
  };
  layChiTietTinTuc = (maTinTuc) => {
    return axios({
      url: `https://5e9829e75eabe7001681bbfb.mockapi.io/news/${maTinTuc}`,
      method: "GET",
    });
  };
}

export const qLyPhimService = new QuanLyPhimServices();
