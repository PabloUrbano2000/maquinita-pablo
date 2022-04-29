import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogMessage = ({ show, setShow, title, message }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Dialog
      open={show}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          style={{ fontSize: '1em', marginTop: 20, marginBottom: 10 }}
          onClick={handleClose}
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogMessage;
