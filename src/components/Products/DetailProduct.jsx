import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../commom/Loading";
function DetailProduct() {
  let { id } = useParams();

  const [detailProduct, setDetailProduct] = useState([]);
  const [load, isLoad] = useState(true);
  const navi = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`http://localhost:3000/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setDetailProduct(data);
        });
        isLoad(false)
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="">
      <div className="relative">
        <button className="pl-4" onClick={() => navi(-1)}>
          <ArrowBackIcon color="primary" />
          BACK
        </button>
        <div>
          <h1 className="pl-8 pb-4 pt-4 font-bold">Detail Products</h1>
          <div className="pl-16">
            <p className="pt-2 pb-2">Title: {detailProduct.title}</p>
            <p className="pt-2 pb-2">Detail: {detailProduct.details}</p>
            <p className="pt-2 pb-2"> Price: {detailProduct.price}</p>
            <p className="pt-2 pb-2">Discount: {detailProduct.discount}</p>
            <p className="pt-2 pb-2">Image:</p>
            <img className="w-96" src={detailProduct.url_image} alt="" />
          </div>
          <div className="pt-8 pr-8 float-right">
            <EditIcon fontSize="large" />
            <DeleteIcon fontSize="large" />
          </div>
        </div>
      </div>

      {load && (
        <div className="fixed top-0  w-full h-full bg-gray-300">
          <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <Loading />
          </div>
        </div>  
      )}
    </div>
  );
}

export default DetailProduct;
