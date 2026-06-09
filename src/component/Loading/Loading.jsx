import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}></div>
      <h2>Loading...</h2>
      <p>Please wait while we fetch your data.</p>
    </div>
  );
};

export default Loading;
