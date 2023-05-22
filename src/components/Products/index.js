import React, { useEffect, useState } from "react";
// import List from "./List";
import { sortPrice } from "./sortPrice";
import axios from "axios";
import List from "../commom/List";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Nav from "./Nav";

function Product() {
  const [list, setList] = useState([]);
  const [listToSort, setListToSort] = useState([]);
  const [isFilterPrice, setIsFilterPrice] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/posts");
      setList(resp.data);
      setListToSort(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSortPrice = (listToSort) => {
    const a = sortPrice(listToSort);
    setListToSort(a);
  };

  const sortName = () => {
    const sortName = [...listToSort];
    sortName.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    setListToSort(sortName);
  };

  const filterPrice = () => {
    setIsFilterPrice(!isFilterPrice);
    if (isFilterPrice) {
      noSort();
    } else {
      const listTemp = [...listToSort];
      setListToSort(listTemp.filter((a) => a.price > 60000));
    }
  };

  const handleDiscount = () => {
    const cloneArr = [...listToSort];
    const discountArr = cloneArr.filter((a) => a.discount > 0);
    setListToSort(discountArr);
  };

  const noSort = () => {
    const noSort = [...list];
    setListToSort(noSort);
    setIsFilterPrice(false);
  };

  const nav = useNavigate()
  const handleNavigation = () => {
    nav("/product/list_1")
  };

  return (
    <div className="flex pt-2">
      <div className="flex justify-between w-full">
        <Nav
          handleDiscount={handleDiscount}
          filterPrice={filterPrice}
          sortName={sortName}
          handleSortPrice={handleSortPrice}
          noSort={noSort}
          listToSort={listToSort}
          isFilterPrice={isFilterPrice}
        />
        <div className="pr-2 w-10/12 ">
          <div className="">
            <Link to="/product/create">
              <Button variant="contained">+ Create</Button>
            </Link>
          </div>
          <div className="flex flex-wrap flex-end">
            {listToSort.map((item, index) => (
              <List
                getData={getData}
                key={index}
                id={item.id}
                url_image={item.url_image}
                url_logo={item.url_logo}
                title={item.title}
                details={item.details}
                price={item.price}
                discount={item.discount}
              />
            ))}
          </div>
          <div>
            <button className="pl-2 pr-2" value={1} onClick={()=>handleNavigation()}>
              1
            </button>
            <button className="pl-2 pr-2" value={2}>
              2
            </button>
            <button className="pl-2 pr-2" value={3}>
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
