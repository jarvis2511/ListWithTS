import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarTwoToneIcon from "@mui/icons-material/EditCalendarTwoTone";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalAdmin from "../admin/ModalAdmin";
function List(props) {
  const { isLogin, getData, ...rest } = props;
  const { id, url_image, url_logo, title, details, price, discount } = rest;
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [idToShow, setIdToShow] = useState();
  const [isModalToEdit, setIsModalToEdit] = useState(false);  
  const [isDelete, setIsDelete] = useState(false);
  const handleClick = (id) => {
    setIsModal(!isModal);
    setIdToShow(id);
  };
  const username = localStorage.getItem("abc");
  useEffect(() => {
    if (username === null) {
      setIsShowEdit(false);
    } else {
      setIsShowEdit(true);
    }
  }, []);
  const navigate = useNavigate();
  const handleEdit = (id) => {
    // setIsModalToEdit(!isModalToEdit);
    // setIdToShow(id);
    navigate("/product/detail/" + id);
  };

  const handleDelete = async (id) => {
    setIsDelete(true);
  };

  const handleAgree = async () => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    getData();
    setIsDelete(false);
  };

  const handleClose = async () => {
    setIsDelete(false);
  };

  const countDiscount = (price) => {
    const count = price - (price * discount) / 100;
    return count.toFixed();
  };

  return (
    <>
      {isModalToEdit ? (
        <ModalAdmin
          isModalToEdit={isModalToEdit}
          idToShow={idToShow}
          title={title}
          details={details}
          price={price}
          url_image={url_image}
          url_logo={url_logo}
          discount={discount}
          getData={getData}
        />
      ) : (
        <></>
      )}
      {/* {isModal ? (
        <Test
          isListDetail={isModal}
          idToShow={idToShow}
          title={title}
          details={details}
          price={price}
          url_image={url_image}
        />
      ) : (
        <></>
      )} */}
      <div className="relative w-1/4 p-4">
        <div className="" onClick={() => handleClick(id)}>
          <div>
            <img className="rounded-2xl w-full h-auto" src={url_image}></img>
          </div>
          <div className="flex">
            <img
              className="rounded-full w-8 h-8 mt-2 mb-2 mr-2 "
              src={url_logo}
            ></img>

            <div className="">
              <h1 className="font-bold">{title}</h1>
              <p className="text-slate-800">{details}</p>
              {discount > 0 ? (
                <div className="flex">
                  <div className="flex">
                    <p className="text-slate-400 italic line-through">
                      $ {price}
                    </p>
                    <p className="inline-block align-top text-xs text-slate-400 italic pl-1">
                      đ
                    </p>
                  </div>
                  <ArrowRightAltIcon />
                  <div className="flex">
                    <p className=" italic font-bold text-red-600 ">
                      $ {countDiscount(price)}
                    </p>
                    <p className="inline-block align-top text-xs italic font-bold text-red-600 pl-1">
                      đ
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex">
                  <p className="text-slate-400 italic ">$ {price}</p>
                  <p className="inline-block align-top text-xs text-slate-400 italic pl-1">
                    đ
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {isShowEdit && (
          <div className="pl-6 absolute right-4 bottom-4 ">
            <EditCalendarTwoToneIcon onClick={() => handleEdit(id)} />
            <DeleteIcon onClick={() => handleDelete(id)} />
          </div>
        )}
        {discount > 0 && (
          <div className="pl-6 absolute top-3  right-3 ">
            <p className="font-extrabold text-red-800 px-1 py-2 border-solid border-yellow-500 bg-yellow-300 border-2 rounded-full">
              {discount}%
            </p>
          </div>
        )}
      </div>
      {isDelete ? (
        <div>
          <Dialog
            open={isDelete}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure ?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                If you confirm deletion, you will not be able to recover
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleAgree}>Agree</Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default List;
