import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {/* Top Header */}
      <header className={styles.topHeader}>
        <div className={styles.topLeft}>
          <span>Skip to the main content</span>
          <span>Screen Reader</span>
        </div>

        <div className={styles.login}>
          <Link to="/signup" className="link" style={{ padding: "10px" }}>
            SignUp
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
          <button onClick={handleLogout} className={styles.btn}>
            Logout
          </button>
        </div>
      </header>

      {/* Main Navbar */}
      <div className={styles.mainNavbar}>
        {/* Left Logo */}
        <div className={styles.logoSection}>
          <img src="/global.png" alt="logo" />
        </div>

        {/* Center Title */}
        <div className={styles.titleSection}>
          <h1>Sant Shiromani Ravidas Global Skills Park (SSRGSP)</h1>
          <p>Bhopal – Madhya Pradesh</p>
        </div>

        {/* Right Logo */}
        <div className={styles.rightLogo}>
          <img src="/mplogo.png" alt="mp-logo" />
        </div>
      </div>

      {/* Menu */}
      <nav className={styles.navbar}>
        {/* Mobile Toggle */}
        <div
          className={styles.mobileMenu}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link to="/" className="link">
              <FaHome /> Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/gallary" className="link">
              Gallary
            </Link>
          </li>
          <li>
            <Link to="/project" className="link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="link">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
