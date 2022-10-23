import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MovieCarouselItem.scss";
import Skeleton from "react-loading-skeleton";
import ModalTrailer from "../ModalTrailer/ModalTrailer";

export default function MovieCarouselItem({ phimItem }) {
  //var moment = require("moment");
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <div className="item__movie">
      <div className="item__link">
        <div className="item__img">
          <img src={phimItem.largeImageURL} alt={phimItem.largeImageURL} />
          <div className="overlay">
            <div
              className="play__button"
              style={{ cursor: "pointer" }}
              onClick={handleToggle}
            >
              <i className="fa fa-play play__icon" />
            </div>
          </div>
          <span className="film__age age--C">{phimItem.duration}p</span>
          <span className="film__audit">
            <p className="film__point">10</p>
            <i className="fa fa-star film__star" />
            <i className="fa fa-star film__star" />
            <i className="fa fa-star film__star" />
            <i className="fa fa-star film__star" />
          </span>
        </div>
        <div className="item__info">
          <p className="film__name">{phimItem.name || <Skeleton />}</p>
          <span className="film__during">
            {phimItem.releaseDate}
          </span>
          <div className="item__button">
            <NavLink
              className="btn buyTicket__button"
              to={`/moviedetail/${phimItem.id}`}
            >
              BOOK NOW
            </NavLink>
          </div>
        </div>
      </div>
      <ModalTrailer
        trailer={phimItem.trailerURL}
        maPhim={phimItem.id}
        open={open}
        handleToggle={handleToggle}
      />
    </div>
  );
}
