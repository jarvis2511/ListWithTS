import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalPassword(props) {
  const { isModal, getDataUser, ...rest } = props;

  const { id, username, password } = rest;
  const [open, setOpen] = useState(isModal);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleClose = () => setOpen(false);
  const handle = () => {
    const newpass = { ...rest, password: newPassword };
    if (oldPassword === password) {
      if (newPassword === passwordConfirm) {
        axios.put(`http://localhost:3000/user/${id}`, newpass);
        handleClose();
        alert("Success");
        getDataUser();
      } else {
        alert("Check Confirm ");
      }
    } else alert("Check old password");
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <input value={passwordToChange} onChange={e=>setPasswordToChange(e.target.value)}/> */}
          <Typography id="modal-modal-title" variant="h8" component="h2">
            Username: {username}
          </Typography>
          <div className="pt-3 pb-3">
            <TextField
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              label="Old password"
            />
          </div>
          <div className="pt-3 pb-3">
            <TextField
              required
              label="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="pt-3 pb-3">
            <TextField
              required
              label="Confirm new password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <button className="bg-slate-300 p-2" onClick={() => handle()}>
            Change Password
          </button>
        </Box>
      </Modal>
    </div>
  );
}
