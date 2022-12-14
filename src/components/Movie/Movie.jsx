import React, { useState, useEffect } from "react";
import "../Movie/Movie.scss";
//import { qLyPhimService } from "../../services/QuanLyPhimServices";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import MovieItem from "../MovieItem/MovieItem";
import { listMovies } from '../../actions/movieActions';
import { useDispatch, useSelector } from "react-redux";


export default function AllMovie() {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  let [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch()

  const movieList = useSelector((state)=> state.movieList.movies)

  useEffect(() => {
    // qLyPhimService
    //   .layDanhSachPhim()
    //   .then((result) => {
    //     setDanhSachPhim(result.data);
    //     console.log(result.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data);
    //   });
    dispatch(listMovies())
    setDanhSachPhim(movieList);
    if(movieList){
      setLoading(false);
    }
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState("");
  const [danhSachPhimSearch, setDanhSachPhimSearch] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = danhSachPhim.filter((phim) => {
      return phim.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDanhSachPhimSearch(results);
  }, [searchTerm, danhSachPhim]);

  const renderDanhSachPhim = () => {
    return danhSachPhimSearch.map((phim, index) => {
      return <MovieItem phimItem={phim} key={index} />;
    });
  };
  if (loading) {
    return <SpinnerLoading />;
  } else {
    return (
      <div className="container all-movie">
        <div className="search">
          <div id="wrap">
            <form autoComplete="on">
              <input
                id="search"
                name="search"
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Nh???p t??n phim c???n t??m"
              />
              <input
                id="search_submit"
                defaultValue="Rechercher"
                type="submit"
              />
            </form>
          </div>
        </div>
        <div className="row movielist-content">{renderDanhSachPhim()}</div>
      </div>
    );
  }
}
