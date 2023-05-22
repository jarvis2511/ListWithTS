import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Information() {
  const [infor, setInfor] = useState([]);

  const navi = useNavigate();
  const username = localStorage.getItem("abc");
  useEffect(() => {
    if (username === null) {
      navi("/login");
    } else {
      fetch("http://localhost:3000/user")
        .then((response) => response.json())
        .then((data) => {
          setInfor(data);
        });
    }
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        setInfor(data);
      });
  }, []);

  return (
    <div>
      {infor.map((user, index) => (
        <div key={index} className="pt-4 pl-2">
          <h1 className="font-bold text-2xl ">Name: {user.name}</h1>
          <p className="pt-2 pb-2">Address: {user.add}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Information;
