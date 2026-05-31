import React from "react";
import styles from "./Topic.module.css";

const topics = [
  {
    id: 1,
    title: "OSI Model",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    id: 2,
    title: "TCP/IP Model",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  },
  {
    id: 3,
    title: "Network Topology",
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422",
  },
  {
    id: 4,
    title: "IP Addressing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    id: 5,
    title: "Routing",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    id: 6,
    title: "Switching",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

function Topic() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Computer Network Topics</h1>

      <div className={styles.cardContainer}>
        {topics.map((topic) => (
          <div key={topic.id} className={styles.card}>
            <img src={topic.image} alt={topic.title} className={styles.image} />

            <div className={styles.overlay}>
              <h2>{topic.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topic;
