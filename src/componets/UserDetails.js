import React from "react";
import "./style.css";
import DisplayUser from "./DisplayUser";
import { fakeUserData } from "../Api";
import DeleteUsers from "./DeleteUsers";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
function UserDetails() {
  const Dispatch = useDispatch();
  const AddNewUser = (payload) => {
    console.log(payload);
    Dispatch(addUser(payload));
  };
  return (
    <>
      <div className="content">
        <div className="admin-subtitle">
          <h2>List of User Details</h2>
          <button onClick={() => AddNewUser(fakeUserData())}>
            Add New User Details
          </button>
        </div>

        <ul>
          <DisplayUser />
        </ul>
        <hr />
        <DeleteUsers />
      </div>
    </>
  );
}

export default UserDetails;
