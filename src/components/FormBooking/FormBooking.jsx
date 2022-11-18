import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./FormBooking.scss";
import { useDispatch, useSelector } from 'react-redux';
import {listMovies} from "../../actions/movieActions";
import { useState } from 'react';
import { useEffect } from 'react';

export default function DialogSelect() {

  const dispatch = useDispatch();

  const listeMovie = useSelector((state)=> state.movieList.movies)

  let [danhSachPhim, setDanhSachPhim] = useState([]);
  useEffect(() => {
    dispatch(listMovies())
    setDanhSachPhim(listeMovie)
    console.log("Danh sách phim: ", danhSachPhim);
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const [thongTinPhim, setThongTinPhim] = useState([]);
  const [maPhim, setMaPhim] = useState([]);
  const [maLichChieu, setMaLichChieu] = useState();
  const [maCumRap, setMaCumRap] = useState();
  const [ngayChieu, setNgayChieu] = useState();
  var handleInput = (event) => {
    let maPhim = event.target.value
    setMaPhim(maPhim);
  };
  var handleInputLichChieu = (event) => {
    let maLichChieu = event.target.value;
    setMaLichChieu(maLichChieu);
  };
  var handleInputNgayChieu = (event) => {
    let ngayChieu = event.target.value;
    setNgayChieu(ngayChieu);
  };

  var handleInputCumRap = (event) => {
    let maCumRap = event.target.value;
    setMaCumRap(maCumRap);
  };


  const renderDSPhim = () => {
    return danhSachPhim?.map((phim, index) => {
      return (
        <MenuItem value={phim.id} key={index}>
          {phim.name}
        </MenuItem>
      );
    });
  };

  return (
    <div className='select-form'>
    <div className='containerButton'>
        <button className="buttonForm" onClick={handleClickOpen} >
                Click me to book ticket now!
        </button>
    </div>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Booking Now!</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', width:"100%" }}>
            <FormControl sx={{ m: 1, minWidth: 120, width:"100%" }}>
              <InputLabel id="demo-dialog-select-label">Films</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                defaultValue={"DEFAULT"}
                onChange={handleInput}
                input={<OutlinedInput label="Age" />}
              >
                {renderDSPhim()}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120, width:"100%" }}>
              <InputLabel id="demo-dialog-select-label">Chọn rạp</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                //onChange={handleChange}
                input={<OutlinedInput label="Age" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Cinema 1</MenuItem>
                <MenuItem value={20}>Cinema 2</MenuItem>
                <MenuItem value={30}>Cinema 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120, width:"100%" }}>
              <InputLabel id="demo-dialog-select-label">Chọn ngày</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                //onChange={handleChange}
                input={<OutlinedInput label="Age" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Cinema 1</MenuItem>
                <MenuItem value={20}>Cinema 2</MenuItem>
                <MenuItem value={30}>Cinema 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120, width:"100%" }}>
              <InputLabel id="demo-dialog-select-label">Chọn giờ</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                //onChange={handleChange}
                input={<OutlinedInput label="Age" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Cinema 1</MenuItem>
                <MenuItem value={20}>Cinema 2</MenuItem>
                <MenuItem value={30}>Cinema 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <button className='buttonCancel' onClick={handleClose}>Cancel</button>
          <button className='buttonBook' onClick={handleClose}>Book now</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
