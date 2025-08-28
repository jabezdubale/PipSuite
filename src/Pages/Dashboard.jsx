import useAuth from "../stores/auth";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const loggedInUser = useAuth((state) => state.user);
  const logOutUser = useAuth((state) => state.logOut);
  const navigate = useNavigate();

  if (!loggedInUser)
    return <div>Sorry You are not signed in. Please Sign in</div>;

  const handleLogout = () => {
    logOutUser();
    navigate("/", { replace: true });
  };
  return (
    <div>
      {loggedInUser.name}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
