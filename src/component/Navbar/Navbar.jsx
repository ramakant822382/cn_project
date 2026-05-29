import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <header className={styles.topHeader}>
        <div className={styles.topLeft}>
          <span>Skip to the main content</span>
          <span>Screen Reader</span>
        </div>

        <div className={styles.login}>Login ▾</div>
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
            <FaHome />
          </li>

          <li>ABOUT ▾</li>
          <li>COURSES ▾</li>
          <li>CENTRE ▾</li>
          <li>ADMISSIONS ▾</li>
          <li>PLACEMENTS ▾</li>
          <li>CAREER ▾</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
