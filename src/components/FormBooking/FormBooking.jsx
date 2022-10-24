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

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

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
              <InputLabel id="demo-dialog-select-label">Cinema</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
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
              <InputLabel id="demo-dialog-select-label">Cinema</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
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
              <InputLabel id="demo-dialog-select-label">Cinema</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
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
