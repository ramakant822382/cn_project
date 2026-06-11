import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const username = localStorage.getItem("username") || "Student";
  console.log("Username from localStorage:", username);

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>CN Portal</h2>

        <ul className={styles.menu}>
          <li>🏠 Dashboard</li>
          <li>👤 Profile</li>
          <li>📚 Courses</li>
          <li>📊 Results</li>
          <li>⚙️ Settings</li>
        </ul>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Welcome, {username}</h1>
        </header>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Total Courses</h3>
            <p>08</p>
          </div>

          <div className={styles.card}>
            <h3>Assignments</h3>
            <p>12</p>
          </div>

          <div className={styles.card}>
            <h3>Attendance</h3>
            <p>92%</p>
          </div>

          <div className={styles.card}>
            <h3>Projects</h3>
            <p>04</p>
          </div>
        </div>

        <div className={styles.infoBox}>
          <h2>Student Information</h2>

          <div className={styles.infoGrid}>
            <div>
              <strong>Name:</strong> {username}
            </div>

            <div>
              <strong>Branch:</strong> Advanced Electronics
            </div>

            <div>
              <strong>Batch:</strong> Batch-2
            </div>

            <div>
              <strong>College:</strong> SSRGSP
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
