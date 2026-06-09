import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../component/Loading/Loading";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://cn-backend-1.onrender.com/login",
        {
          email,
          password,
        },
      );

      if (response.data.success) {
        toast.success("Login Successful");
        setLoading(false);
        // optional
        localStorage.setItem("username", response.data.username);

        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.detail || "Login Failed");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h2>Important Instructions</h2>

        <ul>
          <li>Password will be stored securely in encrypted format.</li>
          <li>Please register your active email address.</li>
          <li>Password reset link will be sent to your registered email.</li>
          <li>Keep your login credentials safe and secure.</li>
        </ul>
      </div>

      <div className={styles.rightSection}>
        <h2>Student Login</h2>

        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.signupBtn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
