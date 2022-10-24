import React, { useState } from "react";
import "./MovieItem.scss";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import LazyLoad from "react-lazyload";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export default function MovieItem({ phimItem }) {
  //console.log(phimItem);
  var moment = require("moment");
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <div className="movie-card col-md-6 col-sm-12">
      <NavLink className="card-link" to={`/moviedetail/${phimItem.id}`} key={phimItem.id}>
        <div className="card-content">
          <div className="content-left">
            <div className="left-header-movie">
              <h1 className="movie-name">{phimItem.name}</h1>
              <p className="during-time">{phimItem.duration} minutes</p>
              <p className="date-time">
                {moment(phimItem.releaseDate).format("DD-MM-yyyy")}
              </p>
            </div>
            <div className="below-header">
              <p className="description">{phimItem.shortDescription}</p>
            </div>
          </div>
          <LazyLoad throttle={200}>
            <CSSTransition
              key="1"
              transitionName="fade"
              transitionAppear
              transitionAppearTimeout={1000}
              transitionEnter={false}
              transitionLeave={false}
            >
              <div
                className="content-right"
                style={{ backgroundImage: `url(${phimItem.largeImageURL})` }}
              ></div>
            </CSSTransition>
          </LazyLoad>
        </div>
      </NavLink>
      <div className="play-trailer" onClick={handleToggle}>
        <i className="play-icon fa fa-play"></i>
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
