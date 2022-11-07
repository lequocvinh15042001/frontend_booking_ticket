import React, { Fragment, useEffect, useState } from "react";
// import ListMovie from "../components/ListMovie/ListMovie";
// import News from "../components/News/News";
// import AppMobile from "../components/AppMobile/AppMobile";
import ShowTimeHome from "../components/ShowTimeHome/ShowTimeHome";
import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import { qLyPhimService } from "../services/QuanLyPhimServices";
import Sliders from "../components/Sliders/Sliders";
import SpinnerLoading from "../components/SpinnerLoading/SpinnerLoading";
import ListMovie from "../components/ListMovie/ListMovie";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ListPage from '../components/SearchBar/ListPage';
import { getPosts } from "../components/SearchBar/api/axios";
import Footer from "../components/Footer/Footer";
import FormBooking from "../components/FormBooking/FormBooking";
import News from "./News";
import NewsComponent from "../components/NewsComponent/NewsComponent";
import { listMovies } from '../actions/movieActions'
import { useDispatch, useSelector } from "react-redux";



export default function Home() {
  const [danhSachPhim, setDanhSachPhim] = useState([]);
  const [loading, $loading] = useState(true);

  const dispatch = useDispatch()

  //const movieList = useSelector((state) => state.movieList)
  const movieList = useSelector((state)=> state.movieList.movies)
  const { error, movies } = movieList
  //console.log(movieList);
  
  useEffect(() => {
    // qLyPhimService
    //   .layDanhSachPhim()
    //   .then((result) => {
    //     if (result) {
    //       setTimeout(() => {
    //         setDanhSachPhim(result.data);
    //         $loading(false);
    //       }, 1500);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data);
    //   });
    dispatch(listMovies())
    setDanhSachPhim(movieList);
  },[dispatch]);
  //console.log(movieList);


//search
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])
//search

  return (
    <Fragment>
      {/* {loading ? (
        <SpinnerLoading />
      ) : ( */}
        <Fragment>
          
          <Header/>

          <SearchBar posts={posts} setSearchResults={setSearchResults} />
          {/* <ListPage searchResults={searchResults} /> */}

          <Sliders/>

          <FormBooking/>

          <ListMovie danhSachPhim={danhSachPhim} />

          {/* <ScrollAnimation animateIn="fadeIn">
            <ShowTimeHome />
          </ScrollAnimation> */}
          <ScrollAnimation animateIn="zoomIn">
            <NewsComponent />
          </ScrollAnimation>
          {/* <AppMobile /> */}

          <Footer/>
        </Fragment>
      {/* )}  */}
    </Fragment>
  );
}
