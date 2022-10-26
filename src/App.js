import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './config/ScrollToTop';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import DetailMovie from './pages/DetailMovie';
import AllMovie from './pages/AllMovie';
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Profile from './pages/Profile';
import News from './pages/News';
import DetailNews from './pages/DetailNews';
import ClusterCinema from './pages/ClusterCinema';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <ScrollToTop />
        <Routes>

            <Route path="/" element={<Home/>} />

            <Route exact path="/home" element={<Home/>} />

            <Route exact path="/allmovie" element={<AllMovie/>} />

            <Route
              exact
              path="/moviedetail/:slug"
              element={<DetailMovie/>}
            />

          {/*  <Route
            exact
            path="/booking/:maLichChieu"
            element={<BookingTicket/>}
          /> */}

            <Route exact path="/login" element={<Login/>} />

            <Route exact path="/register" element={<Register/>} />

          <Route exact path="/profile" element={<Profile/>} />

          {/* <Route exact path="/clustercinema" element={<ClusterCinema/>} /> */}
          <Route exact path="/news" element={<News/>} />
          <Route
            exact
            path="/detailnews/:slug"
            element={<DetailNews/>}
          />
          {/* <Route exact path="/dashboard" element={<Dashboard/>} /> */}
          <Route
            exact
            path="/usermanagement"
            element={<UserManagement/>}
          />
          {/* <Route
            exact
            path="/moviemanagement"
            element={<MovieManagement/>}
          />
          <Route
            exact
            path="/createshowtime"
            element={<CreateShowTime/>}
          />
          <Route
            exact
            path="/newsmanagement"
            element={<NewsManagement/>}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
