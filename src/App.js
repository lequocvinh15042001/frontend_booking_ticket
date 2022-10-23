import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './config/ScrollToTop';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
         {/*  <Route exact path="/allmovie" element={<AllMovie/>} />
          <Route
            exact
            path="/moviedetail/:maphim"
            element={<DetailMovie/>}
          />
          <Route
            exact
            path="/booking/:maLichChieu"
            element={<BookingTicket/>}
          /> */}
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          {/* <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/clustercinema" element={<ClusterCinema/>} />
          <Route exact path="/news" element={<News/>} />
          <Route
            exact
            path="/detailnews/:matintuc"
            element={<DetailNews/>}
          />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route
            exact
            path="/usermanagement"
            element={<UserManagement/>}
          />
          <Route
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
