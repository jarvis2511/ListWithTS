import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { useNavigate } from "react-router-dom";
function Nav(props) {
  const {
    handleDiscount,
    filterPrice,
    sortName,
    handleSortPrice,
    listToSort,
    isFilterPrice,
    noSort,
  } = props;
  const navi = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("abc");
    navi("/login");
  };
  return (
    <div className="w-2/12 bg-slate-300">
      {/* Tách function ra file => Utils -> tên funtion ( Dùng khi 1 funtion được dùng lại nhiều lần ) */}
      <button
        className="block pt-2 pb-2 pl-2"
        onClick={() => handleSortPrice(listToSort)}
      >
        SortPrice
      </button>
      {/* Viết trực tiếp vào file */}
      <button className="block pt-2 pb-2 pl-2" onClick={sortName}>
        SortName
      </button>
      {isFilterPrice ? (
        <div className="bg-blue-400">
          <button onClick={filterPrice} className="pt-2 pb-2 pl-2">
            Price {">"} 60000
          </button>
        </div>
      ) : (
        <div>
          <button onClick={filterPrice} className="pt-2 pb-2 pl-2 ">
            Price {">"} 60000
          </button>
        </div>
      )}
      <button
        className="block pt-2 pb-2 pl-2"
        onClick={() => handleDiscount(listToSort)}
      >
        Discount
      </button>
      <button className="block pt-2 pb-2 pl-2" onClick={noSort}>
        No Sort
      </button>
      <div className="fixed bottom-2 block pt-4 pl-2">
        <LogoutIcon />
        <button className="pl-2" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
