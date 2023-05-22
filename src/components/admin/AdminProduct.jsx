import { Button, FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from "../commom/List";

function AdminProduct() {
  const [list, setList] = useState([]);
  const [isShowEdit, setIsShowEdit] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/posts");
      setList(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-between pr-4 pl-4">
        <div>
          <FormControlLabel
            control={<Switch defaultChecked/>}
            label="Edit & Delete"
            onChange={() => setIsShowEdit(!isShowEdit)}
          />
        </div>
        <div>
          <Link to="/Admin/Product/Create">
            <Button variant="contained">+ Create</Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap">
        {list.map((item, index) => (
          <List
            key={index}
            id={item.id}
            url_image={item.url_image}
            url_logo={item.url_logo}
            title={item.title}
            details={item.details}
            price={item.price}
            discount={item.discount}
            isShowEdit={isShowEdit}
            getData={getData}
          />
        ))}
      </div>
    </div>
  );
}

export default AdminProduct;
