import React from "react";
import "./Description.scss";
export default function Description({thongTinPhim}) {
  console.log("Thông tin phim bên bảng table:", thongTinPhim);
  //let { thongTin } = props;
  //var moment = require("moment");
  return (
    <div className="row__above row">
      <div className="info__category col-md-6 col-sm-12">
        <div className="category__item">
          <p className="category__name">Ngày phát hành</p>
          <p className="category__content">{thongTinPhim.releaseDate}</p>
        </div>
        <div className="category__item">
          <p className="category__name">Đạo diễn</p>
          <p className="category__content">{thongTinPhim.director}</p>
        </div>
        <div className="category__item">
          <p className="category__name">Thể Loại</p>
          <p className="category__content">{thongTinPhim.categories}</p>
        </div>
        <div className="category__item">
          <p className="category__name">Ngôn ngữ</p>
          <p className="category__content">{thongTinPhim.language}</p>
        </div>
      </div>
      <div className="info__content col-md-6 col-sm-12">
        <div className="info__title">Nội dung</div>
        <p className="info__text">
          {thongTinPhim.longDescription}
        </p>
      </div>
    </div>
  );
}
