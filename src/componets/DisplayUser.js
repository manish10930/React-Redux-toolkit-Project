import { useSelector } from "react-redux";
import AiFillDelete from "react-icons/ai";
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";
const DisplayUser = () => {
  const data = useSelector((state) => {
    return state.users;
  });

  console.log(
    "🚀 ~ file: DisplayUser.js:7 ~ constdat̥a=useSelector ~ data:",
    data
  );
  const Dispatch = useDispatch();

  const deleteUsers = (id) => {
    Dispatch(removeUser(id));
    console.log("hii");
  };

  return (
    <>
      {data.map((item, id) => {
        return (
          <>
            <li
              style={{ display: "flex", justifyContent: "space-between" }}
              key={id}
            >
              {item}
              <button onClick={() => deleteUsers(id)}>Delete</button>
            </li>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default DisplayUser;
