import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Home() {
  //storing the user information
  const [users, setUsers] = useState([]); //The state variable users will be used to store the data fetched from the API. useState initializes the state variable users as an empty array ([]).
  const { id } = useParams(); //to get the specific user by specific id
  useEffect(() => {
    loadUsers();
  }, []); //empty list confirms to run the page one time ,otherwise it will run infinite times
  //async and await to wait untill the rqst is being completed
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data); //Once the API call is successful, the data from the response is set as the new value of the users state using the setUsers function.
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        {/*for margin top;padding */}
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                {" "}
                {/* Each table row needs a unique key */}
                <th scope="row">{index + 1}</th>{" "}
                {/* The index + 1 will be used as the row number */}
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
