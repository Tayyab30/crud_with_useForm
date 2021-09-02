import React, {useState, useEffect}  from "react";
import axios from 'axios';
import { useHistory ,useParams} from "react-router-dom";


const EditUser = () => {

    const {id} = useParams();
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    }); 

    useEffect(() => {
        loadUser();
      }, []);

    const {name,username,email,phone,website} = user;
    const onInputChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.put( `http://localhost:3002/users/${id}`,user); 
        history.push("/");
    }

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
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
          <button  className="btn btn-warning mb-3">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
