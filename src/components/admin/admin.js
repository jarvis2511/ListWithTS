import LogoutIcon from "@mui/icons-material/Logout";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Login from "./Login";
function Admin() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (isLogin) => {
    setIsLogin(!isLogin);
  };

  const handleLogout = () => {
    localStorage.removeItem("abc");
    setIsLogin(true);
  };
  
  return (
    <div className="">
      {isLogin ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <div className="">
          <div className="flex pt-8 relative">
            <div className="relative w-1/6 bg-slate-300 ">
              {/* Viết trực tiếp vào file */}
              <NavLink to="/Admin/Product" className="block pt-4 pl-2 nav-link">
                <button>Product</button>
              </NavLink>
              <NavLink to="/Admin/User" className="block pt-4 pl-2 nav-link">
                <button>User</button>
              </NavLink>
              <div className="fixed bottom-2 block pt-4 pl-2">
                <LogoutIcon />
                <button className="pl-2" onClick={() => handleLogout()}>
                  Logout
                </button>
              </div>
            </div>

            <div className="flex flex-wrap w-5/6">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
