import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    //this is an object
    name: "",
    username: "",
    email: "",
    //The initial values for these properties are empty strings. The setUser function returned by the useState hook is used to update the user state.
  });
  //deconstracting the object:
  const { name, username, email } = user;
  //creating event
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); //...user is used as we used name field only,it will keep on adding the new update
  };
  const onSubmit = async (e) => {
    e.preventDefault(); //to ignore the wired url
    await axios.post("http://localhost:8080/user", user);
    navigate("/"); //home
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"Text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name} /*this name comes from the const... */
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"Text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"Text"}
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>

            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
