import { ImageListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function BasicModal(props) {
  const { isListDetail, title, details, price, url_image } = props;
  const [open, setOpen] = useState(isListDetail);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
           Product Detail
          </Typography>
          <Typography id="modal-modal-title" variant="h6" sx={{ mt: 2 }}>
            Name: {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Detail: {details}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Price: {price}
          </Typography>
          <ImageListItem>
            <img className="pt-4" src={url_image} loading="lazy" />
          </ImageListItem>
        </Box>
      </Modal>
    </div>
  );
}
