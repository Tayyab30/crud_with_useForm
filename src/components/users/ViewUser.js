import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    loadUser();
  }, []);
  const { id } = useParams();
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3002/users/${id}`);
    console.log(res.data);
    setUser(res.data);
  };
  return (
    <div className="container">
      <h2 className="text-center mt-5">{user.name}</h2>

      <div className="card" style={{width: '18rem'}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>ID:</b> {user.id}</li>
          <li className="list-group-item">User Name: {user.username}</li>
          <li className="list-group-item">Phone Number: {user.phone}</li>
          <li className="list-group-item">Web Site Url: {user.website}</li>
        </ul>
      </div>
    </div>
  );
};

export default ViewUser;
