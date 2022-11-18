import React, { useState, Fragment, useMemo } from "react";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import MovieInfo from "../components/DetailMovie/MovieInfo/MovieInfo";
import ShowTime from "../components/DetailMovie/ShowTime/ShowTime";
import SpinnerLoading from "../components/SpinnerLoading/SpinnerLoading";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";

//Giả
const movieDetail = 
  {
      "actors": "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
      "categories": "Hành Động, Phiêu Lưu",
      "director": "Jon Watts",
      "duration": 149,
      "id": "6333bedd3c5d7e4b3b5d69c0",
      "language": "Tiếng Anh - Phụ đề Tiếng Việt",
      "largeImageURL":"https://ecdn.game4v.com/g4v-content/uploads/2021/07/Spider-No-Way-Home-1-game4v.jpg",
      "longDescription": "Lần đầu tiên trong lịch sử điện ảnh của Người Nhện, thân phận người hàng xóm thân thiện bị lật mở, khiến trách nhiệm làm một Siêu Anh Hùng xung đột với cuộc sống bình thường và đặt người anh quan tâm nhất vào tình thế nguy hiểm. Khi anh nhờ đến giúp đỡ của Doctor Strange để khôi phục lại bí mật, phép thuật đã gây ra lỗ hổng thời không, giải phóng những ác nhân mạnh mẽ nhất từng đối đầu với Người Nhện từ mọi vũ trụ. Bây giờ, Peter sẽ phải vượt qua thử thách lớn nhất của mình, nó sẽ thay đổi không chỉ tương lai của chính anh mà còn là tương lai của cả Đa Vũ Trụ.",
      "name": "Người Nhện: Không Còn Nhà",
      "rated": "C13 - PHIM CẤM KHÁN GIẢ DƯỚI 13 TUỔI",
      "releaseDate": "2021-12-17",
      "shortDescription": "Đa vũ trụ được mở ra, những kẻ phản diện nào sẽ trạm chán spidey, cùng đón xem nhá",
      "smallImageURl": "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/s/n/snwh_poster_bluemontage_4x5fb_1__1.jpg",
      "trailerURL": "https://www.youtube.com/embed/daHCu_jU5mQ"
  }

//Giả


const DetailMovie = () => {
  const { slug } = useParams();
  console.log("slug:  ",slug);
  let [phim, setPhim] = useState();
  const [loading, $loading] = useState(true);
  const maPhim = slug;
  console.log("Mã phim lấy được: ", maPhim);
  useMemo(
    () =>
      qLyPhimService.layThongTinPhim(maPhim).then((result) => {
        setTimeout(() => {
          setPhim(result.data);
          $loading(false);
        }, 1500);
      }),
    [maPhim]
  );

  console.log("Chi tiết phim lấy được: ", phim);
  //nào xong API get details phim rồi thì thay movieDetail = phim
  return (
    <Fragment>
      <Header/>
      {loading ? (
        <SpinnerLoading />
      ) : (
        <>
          <MovieInfo phimItem={phim} />
          <ShowTime phim={phim} maPhim={maPhim} />
        </>
      )}
    </Fragment>
  );
};

export default DetailMovie;
