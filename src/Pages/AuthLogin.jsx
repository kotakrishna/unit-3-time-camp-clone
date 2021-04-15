import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getUserProjectId } from "../Redux/action";
import { useHistory, Redirect, NavLink } from "react-router-dom";
import { TimeSheets } from "../MainApp/AppPages/TimeSheets";

export default function AuthLogin() {
  // const isAuth = useSelector((state) => state.isAuth);

  const dispatch = useDispatch();
  const user = {
    username: "timeCamp@timer",
  };
  // console.log(userId);
  // console.log(userId);

  // dispatch(getUserProjectId(userId));
  // React.useEffect(() => {}, []);
  const [page, setPage] = React.useState(false);
  const handleLogin = () => {
    dispatch(getUserId(user.username));
    setPage(true);
  };
  // const userId = useSelector((state) => state.userId);
  // console.log(userId);
  // dispatch(getUserProjectId(userId));
  return (
    <>
      <div>
        <div>
          <h1>Login</h1>
          <button onClick={handleLogin}>User Login</button>
        </div>
      </div>
      {/* 
        Just for testing ... i am calling TimeSheets page
      */}
        <NavLink to='/timesheets'>
          TimeSheets
        </NavLink>
        {/* For testing only */}

      {page ? <Redirect to="/inner-page" /> : null}
    </>
  );
}
