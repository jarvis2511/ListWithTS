import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Setting() {
  return (
    <div>
      <div className="flex pt-8 ">
        <div className="w-1/6 bg-slate-300 ">
          {/* Tách function ra file => Utils -> tên funtion ( Dùng khi 1 funtion được dùng lại nhiều lần ) */}
          <NavLink to="/Setting/Personal" className="block pt-4 pl-2 nav-link">
            Personal
          </NavLink>
          {/* Viết trực tiếp vào file */}
          <NavLink
            to="/Setting/Notification"
            className="block pt-4 pl-2 nav-link"
          >
            Notification
          </NavLink>
        </div>
        <div className="flex flex-wrap w-5/6 pl-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Setting;
