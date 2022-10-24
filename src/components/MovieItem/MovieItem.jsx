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
              key="0"
              transitionname="fade"
              transitionappear="true"
              transitionappeartimeout={1000}
              transitionenter={false}
              transitionleave={false}
            >
              
              <div
                className="content-right"
                style={{ backgroundImage: `url(${phimItem.largeImageURL})` }}
              ></div>
            </CSSTransition>
          </LazyLoad>
                        {/* <img
                className="content-right"
                style={{ backgroundImage: `url(${phimItem.largeImageURL})` }}
              ></img> */}
                                        {/* <div
        className="play-trailer"
        style={{ cursor: "pointer" }}
        onClick={handleToggle}
      >
        <i className="play-icon fa fa-play" />
      </div> */}
        </div>
      </NavLink>

        <ModalTrailer
        trailer={phimItem.trailerURL}
        maPhim={phimItem.id}
        open={open}
        handleToggle={handleToggle}
      />
        <div className="play-trailer" onClick={handleToggle}>
          <i className="play-icon fa fa-play"></i>
        </div>
    </div>
    
  );
}
