import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Token ya user data delete karo
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Login page par redirect
    navigate("/login");
  }, [navigate]);

  return <h2>Logging out...</h2>;
};

export default Logout;