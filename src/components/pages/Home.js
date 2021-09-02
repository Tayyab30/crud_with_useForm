import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUsers(result.data);
  };

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();  
  }
  return (
    <div className="container">
      <div className="p-4">
        <h1>Home page</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="container">
        <table className="table border-radius-rounded shadow">
          <thead className="bg-dark text-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col " className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  <Link className="btn btn-primary m-2" to={`viewuser/${user.id}`}>View</Link>
                  <Link className="btn btn-outline-success m-2" to={`/edituser/${user.id}`}>Edit</Link>
                  <button className="btn btn-danger m-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
