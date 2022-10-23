import React, { Component } from "react";
import "../Carousel/Carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import BookTicket from "../BookTicket/BookTicket";
// export default function Carousel() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
    // <div className="hotMovie">
    //   <div className="hotMovie__content">
    //     <Slider
    //       dot={true}
    //       infinite={true}
    //       speed={500}
    //       slidesToShow={1}
    //       slidesToScroll={1}
    //       className="myHotMovieCarousel"
    //     >
    //       <div className="item">
    //         <div className="item__img">
    //           <img
    //             className="img-fluid"
    //             src="https://s3img.vcdn.vn/123phim/2020/07/yeu-nhau-mua-e-15949150603140.png"
    //             alt="phim soi"
    //           />
    //           <div className="background__overlay">
    //             <i className="fa fa-play carousel__button" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="item">
    //         <div className="item__img">
    //           <img
    //             className="img-fluid"
    //             src="https://s3img.vcdn.vn/123phim/2020/05/vi-anh-deo-tin-15906776637571.png"
    //             alt="hinh anh phim"
    //           />
    //           <div className="background__overlay">
    //             <i className="fa fa-play carousel__button" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="item">
    //         <div className="item__img">
    //           <img
    //             className="img-fluid"
    //             src="https://s3img.vcdn.vn/123phim/2020/07/ban-dao-15954792351353.jpg"
    //             alt="va phim cua hinh anh"
    //           />
    //           <div className="background__overlay">
    //             <i className="fa fa-play carousel__button" />
    //           </div>
    //         </div>
    //       </div>
    //     </Slider>
    //   </div>
    //   {/* <BookTicket /> */}
    // </div>
//       <div>
//       <h2>Center Mode</h2>
//       <Slider {...settings}>
//         <div>
//           <img
//             className="img-fluid"
//             src="https://s3img.vcdn.vn/123phim/2020/07/yeu-nhau-mua-e-15949150603140.png"
//             alt="phim soi"
//           />
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

export default class Carousel extends Component {
  render() {
    const settings = {
      dot:true,
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <div className="hotMovie">
        <div className="hotMovie__content">
        <Slider {...settings} className="myHotMovieCarousel">
          <div className="item">
              <div className="item__img">
                <img 
                  className="img-fluid"
                  src="https://s3img.vcdn.vn/123phim/2020/07/yeu-nhau-mua-e-15949150603140.png"
                />
                <div className="background__overlay">
                  <i className="fa fa-play carousel__button" />
               </div>
              </div>
          </div>
          <div className="item">
              <div className="item__img">
                <img
                  className="img-fluid"
                  src="https://s3img.vcdn.vn/123phim/2020/07/ban-dao-15954792351353.jpg"
                />
              <div className="background__overlay">
                  <i className="fa fa-play carousel__button" />
               </div>
              </div>
          </div>
          <div className="item">
              <div className="item__img">
                <img 
                  className="img-fluid"
                  src="https://s3img.vcdn.vn/123phim/2020/05/vi-anh-deo-tin-15906776637571.png"
                />
               <div className="background__overlay">
                  <i className="fa fa-play carousel__button" />
               </div>
              </div>
          </div>
          <div className="item">
              <div className="item__img">
                <img 
                  className="img-fluid"
                  src="https://s3img.vcdn.vn/123phim/2020/07/yeu-nhau-mua-e-15949150603140.png"
                />
                <div className="background__overlay">
                  <i className="fa fa-play carousel__button" />
               </div>
              </div>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}