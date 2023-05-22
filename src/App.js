import { NavLink, Route, Routes } from "react-router-dom";
import Information from "./components/Information/Information";
import Product from "./components/Products";
import CreateProduct from "./components/Products/CreateProduct";
import DetailProduct from "./components/Products/DetailProduct";
import Notification from "./components/Settings/Notification";
import Personal from "./components/Settings/Personal";
import Setting from "./components/Settings/Setting";
import Login from "./components/admin/Login";
import Error from "./components/commom/Error";

function App() {
  return (
    <div className="App">
      <div>
        <ul className="flex w-1/6 justify-between">
          <li className="p-2 ">
            <NavLink to="product" className="nav-link">
              Product
            </NavLink>
          </li>
          <li className="p-2 ">
            <NavLink to="information" className="nav-link">
              Information
            </NavLink>
          </li>
          <li className="p-2 ">
            <NavLink to="setting" className="nav-link">
              Setting
            </NavLink>
          </li>

          <li className="p-2 ">
            <NavLink to="login" className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/detail/:id" element={<DetailProduct />} />
          <Route path="Information" element={<Information />} />
          <Route path="Setting" element={<Setting />}>
            <Route path="Personal" element={<Personal />} />
            <Route path="Notification" element={<Notification />} />
          </Route>

          <Route path="login" element={<Login />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
