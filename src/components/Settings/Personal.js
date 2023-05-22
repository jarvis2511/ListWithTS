import React, { useEffect, useState } from "react";
import ModalPassword from "./ModalPassword";
import axios from "axios";

function Personal() {
  const [infor, setInfor] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [person, setPerson] = useState([]);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/user");
      setInfor(resp.data);
    } catch (error) {}
  };

  const handleChangePassword = (props) => {
    setIsModal(!isModal);
    setPerson(props);
  };
  return (
    <div className="">
      {isModal ? <ModalPassword getDataUser={getDataUser} isModal={isModal} {...person} /> : <></>}
      <p className="font-extrabold text-3xl">* Personal Setting</p>
      <div>
        {infor.map((user, index) => (
          <div key={index} className="pt-4 pl-2">
            <h1 className="font-bold text-2xl pt-2 pb-2 ">
              {" "}
              Name: {user.name}
            </h1>
            <p className="pt-2 pb-2">Username: {user.username}</p>
            <input
              value={"Password: "}
              type=""
              className="inline-block pt-2 pb-2"
              readOnly
            />
            <input
              name="Password"
              value={user.password}
              readOnly
              type="password"
              className="pt-2 pb-2"
            />
            <p className="pt-2 pb-2">Email: {user.email}</p>
            <div className="pt-8 pb-2 pl-2">
              <button
                className="bg-slate-300 p-2"
                onClick={() => handleChangePassword(user)}
              >
                Change Password
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personal;
