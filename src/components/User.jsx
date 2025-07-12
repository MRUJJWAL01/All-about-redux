import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "../store/reducer/UserSlice";

const  User = () => {
  const { users } = useSelector((s) => s.users);

  const dispatch = useDispatch();

  const deleteHendler = (i) => {
    dispatch(userDelete(i));
  };

  return (
    <div className=" container bg-red-200 mt-5 m-auto p-10 w-[60%]  ">
      <h1 className="text-3xl text-red-900 font-bold">User List</h1>
      <ul className="mt-3">
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name}{" "}
              <span
                onClick={() => deleteHendler(index)}
                className="text-red-900 font-bold cursor-pointer"
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default User;

