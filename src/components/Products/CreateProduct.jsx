import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios.post("http://localhost:3000/posts", data);
    navigate(-1);
  };
  return (
    <div className="w-full">
      <div className="pl-2" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </div>
      <div className="w-full flex justify-center">
        <form className="flex flex-col w-2/3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex pt-2 pb-2">
            <label className="w-1/5">Title:</label>
            <input
              className="border-solid border-slate-300 border-2 w-3/5 w-3/5"
              placeholder="title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="flex pt-2 pb-2">
            <label className="w-1/5">Details:</label>
            <input
              className="border-solid border-slate-300 border-2 w-3/5"
              placeholder="details"
              {...register("details", { required: true })}
            />
          </div>
          <div className="flex pt-2 pb-2">
            <label className="w-1/5">Price:</label>
            <input
              className="border-solid border-slate-300 border-2 w-3/5"
              placeholder="price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="flex pt-2 pb-2">
            <label className="w-1/5">Url_image:</label>
            <input
              className="border-solid border-slate-300 border-2 w-3/5"
              placeholder="url_image"
              {...register("url_image", { required: true })}
            />
          </div>
          <div className="flex pt-2 pb-2">
            <label className="w-1/5">Url_logo:</label>
            <input
              className="border-solid border-slate-300 border-2 w-3/5"
              placeholder="url_logo"
              {...register("url_logo", { required: true })}
            />
          </div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="flex pt-8 pb-4 w-4/5 justify-center">
            <input
              className="border-solid border-slate-300 border-2 px-6 py-2 bg-cyan-800 text-white font-bold"
              type="submit"
              value={"+ Create"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
