import React from "react";
import { deleteUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

function DeleteUsers() {
  const dispatch = useDispatch();

  const completeDelete = (payload) => {
    console.log("completeDelete");
    dispatch(deleteUsers(payload));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => completeDelete(0)}>Delete all</button>
      </div>
    </>
  );
}

export default DeleteUsers;
