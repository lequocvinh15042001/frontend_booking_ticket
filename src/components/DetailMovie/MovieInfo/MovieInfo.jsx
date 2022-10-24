import React, { useState } from "react";
import "../MovieInfo/MovieInfo.scss";
import ModalTrailer from "../../ModalTrailer/ModalTrailer";

export default function MovieInfo({ phimItem }) {
  console.log("Nhận được phim: ", phimItem);
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  var moment = require("moment");
  const renderStar = (rating) => {
    if (rating > 5) rating = 5;
    var content = [];
    for (let i = 0; i < rating; i++) {
      let star = [];
      star.push(<i className="fa fa-star" key={i}></i>);
      content.push(star);
    }
    for (let i = 0; i < 5 - rating; i++) {
      let star = [];
      star.push(<i className="fa fa-star-half-alt" key={i}></i>);
      content.push(star);
    }
    return content;
  };
  const countRatingMark = (rating) => {
    return rating * 0.5 + 10 * 0.5;
  };

  //Xong API Get details phim á thì thay movieDetail = phimItem
  return (
    <section className="movieInfo">
      <div className="full__background">
        <img
          src={phimItem.largeImageURL}
          alt={phimItem.largeImageURL}
          style={{ height: "450px" }}
        />
        <div className="overlay__gradient" />
        <div className="play__mobile">
          <i className="fa fa-play" />
        </div>
        <div className="rating__point">
          <p className="film__point">{countRatingMark(5)}</p>
          <div className="rating__stars">{renderStar(5)}</div>
        </div>
      </div>
      <div className="form__info container">
        <div className="row">
          <div className="movie__poster text-left col-3">
            <div
              style={{ width: 220, height: 300 }}
              className="poster__img d-flex justify-content-center align-items-center"
            >
              <img
                className="w-100 h-100"
                src={phimItem.smallImageURl}
                alt={phimItem.smallImageURl}
              />
              <div className="play__btn" onClick={handleToggle}>
                <i className="fa fa-play" />
              </div>
            </div>
          </div>
          <div className="movie__info col-6">
            <div>
              <div className="showtime">
                {/* {moment(phimItem.releaseDate).format("DD-MM-yy")} */}
                {phimItem.releaseDate}
              </div>
              <div className="mb-3 d-flex justify-content-start align-items-center">
                <span className="age--C">{phimItem.rated}</span>
                <span className="name">{phimItem.name}</span>
              </div>

              <p className="during">{phimItem.duration} phút</p>
              <a href={"#movieTheater"}>
                <button className="bookTicket-btn">Book Now</button>
              </a>
            </div>
          </div>
          <div className="movie__rating d-flex justify-content-end col-3">
            <div>
              <div className="rating__point">
                {countRatingMark(5)}
                <div className="vongtronxanh"></div>
              </div>
              <div className="rating__stars">
                {renderStar(10)}
              </div>
              <div className="rating__text">
                10 người đánh giá
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="film__infoMobile">
        <div className="days">
          {moment(phimItem.releaseDate).format("DD-MM-yy")}
        </div>
        <div className="name">{phimItem.name}</div>
        <div className="during">{phimItem.duration}</div>
      </div>
      <ModalTrailer
        trailer={phimItem.trailerURL}
        maPhim={phimItem.name}
        open={open}
        handleToggle={handleToggle}
      />
    </section>
  );
}
