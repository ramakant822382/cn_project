import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://cn-backend-1.onrender.com/register", // Apna API URL yaha daalo
        formData,
      );

      console.log(response.data);
      alert("Signup Successful");

      // Login Page Redirect
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Signup Failed");
    }
  };

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
        <h2>Student SignUp</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.signupBtn}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
