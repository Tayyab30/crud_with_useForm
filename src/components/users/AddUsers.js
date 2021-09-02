import React, {useState}  from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";


const AddUsers = () => {

    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    }); 
    const {name,username,email,phone,website} = user;
    const onInputChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post( "http://localhost:3002/users",user); 
        // console.log(res.data);
        history.push("/");
    }
  return (
    <div className="container ">
      <div className=" w-75 mx-auto shadow text-center">
          <h1 className="m-auto mt-5 p-5">Add User Form</h1>
        <form className="p-4" onSubmit={onSubmit}>
        <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              placeholder="Enter Your Name"
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              placeholder="Enter Your User Name"
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              aria-describedby="emailHelp"
              placeholder="Enter Your E-mail Address"
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="phone"
              value={phone}
              placeholder="Enter Your Phone Number"
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="website"
              value={website}
              placeholder="Enter Your Website Name"
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <button  className="btn btn-primary mb-3">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
