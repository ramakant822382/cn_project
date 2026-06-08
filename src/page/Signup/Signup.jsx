import React from "react";
import styles from "./Signup.module.css";

const Signup = () => {
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

        <form>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter Full Name" />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter Email" />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
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
