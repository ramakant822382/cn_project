import React from "react";
import styles from "./Footer.module.css";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaChevronUp,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <h2 className={styles.heading}>Important Weblinks</h2>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <img
                src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5ldHdvcmt8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>

            <div className={styles.card}>
              <img
                src="https://media.istockphoto.com/id/2224051340/photo/global-computer-network-communication.jpg?s=1024x1024&w=is&k=20&c=AHokr3eexuA4UhONwWg4xGstDbYA1ES-O4F0-ESeFIU="
                alt=""
              />
            </div>

            <div className={styles.card}>
              <img
                src="https://media.istockphoto.com/id/625121684/photo/silhouette-antenna-towe-with-sunset-background.jpg?s=1024x1024&w=is&k=20&c=oLp9Ynq2WSLL5Zvm9-NqJ-JlNc35qpEovKB3Z3xR64c="
                alt=""
              />
            </div>

            <div className={styles.card}>
              <img
                src="https://media.istockphoto.com/id/492405387/photo/global-computer-network.jpg?s=1024x1024&w=is&k=20&c=u0qv02tNtOB4JJ2ycDJpog1Ta54bEInBSlJxJPsLrzI="
                alt=""
              />
            </div>

            <div className={styles.card}>
              <img
                src="https://media.istockphoto.com/id/534139912/photo/global-computer-network.jpg?s=1024x1024&w=is&k=20&c=fBPO6LRxKXDFtgUEkmGQ3FQDaH67Y6PFIHFxZBewfkc="
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.centerContent}>
            <div className={styles.visitorBox}>
              <span>Visitors Count</span>

              <div className={styles.counter}>
                <span>2</span>
                <span>8</span>
                <span>0</span>
                <span>4</span>
                <span>0</span>
                <span>3</span>
              </div>

              <p>Site Last Updated On : 29-05-2026</p>
            </div>

            <div className={styles.links}>
              <a href="/">Disclaimer</a>
              <a href="/">Website Policies</a>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>© 2026 SSR Global Skills Park . All Rights Reserved.</p>

            <p>
              Designed and Developed by <span>Ramakant Sharma</span>
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className={styles.socialBar}>
          <a href="/">
            <FaFacebookF />
          </a>

          <a href="/">
            <FaTwitter />
          </a>

          <a href="/">
            <FaLinkedinIn />
          </a>

          <a href="/">
            <FaYoutube />
          </a>

          <a href="/">
            <FaInstagram />
          </a>

          <button className={styles.topBtn}>
            <FaChevronUp />
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
