import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #333",
  //   boxShadow: 24,
  p: 3,
};

export default function ModalAdmin(props) {
  const {
    isModalToEdit,
    idToShow,
    title,
    details,
    price,
    url_logo,
    url_image,
    discount,
    getData,
  } = props;
  const [open, setOpen] = useState(isModalToEdit);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios.put(`http://localhost:3000/posts/${idToShow}`, data);
    handleClose();
    getData();
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="flex pt-2 pb-2">
                <label className="w-1/4">Title:</label>
                <input
                  className=" bg-gray-100 border-2 border-solid border-slate-200 px-2"
                  placeholder="Title"
                  {...register("title")}
                  defaultValue={title}
                />
              </div>
              <div className="flex pt-2 pb-2">
                <label className="w-1/4">Details:</label>
                <input
                  className=" bg-gray-100 border-2 border-solid border-slate-200 px-2"
                  placeholder="Details"
                  {...register("details")}
                  defaultValue={details}
                />
              </div>
              <div className="flex pt-2 pb-2">
                <label className="w-1/4">Price:</label>
                <input
                  className=" bg-gray-100 border-2 border-solid border-slate-200 px-2"
                  placeholder="Price"
                  {...register("price")}
                  defaultValue={price}
                />
              </div>
              <div className="flex pt-2 pb-2">
                <label className="w-1/4">Discount:</label>
                <input
                  className=" bg-gray-100 border-2 border-solid border-slate-200 px-2"
                  placeholder="Price"
                  {...register("discount")}
                  defaultValue={discount}
                />
                <label className="pl-2">%</label>
              </div>
              <div className="flex pt-2 pb-2">
                <label className="w-1/4">Url_image:</label>
                <input
                  className=" bg-gray-100 border-2 border-solid border-slate-200 px-2"
                  placeholder="Url_image"
                  {...register("url_image")}
                  defaultValue={url_image}
                />
              </div>
              <div className="flex pt-2 pb-2">
                <label className="w-1/4">Url_logo:</label>
                <input
                  className=" bg-gray-100 border-2 border-solid border-slate-200 px-2"
                  placeholder="Url_logo"
                  {...register("url_logo")}
                  defaultValue={url_logo}
                />
              </div>
            </div>
            <div></div>
            <input
              type="submit"
              value={"SEND"}
              className="mt-4 px-4 font-bold bg-sky-600	text-white py-2 border-2 border-solid border-sky-500"
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
