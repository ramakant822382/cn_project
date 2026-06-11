import React from "react";
import styles from "./Topic.module.css";

const topics = [
  {
    id: 1,

    image: "/chapter_1.png",
  },
  {
    id: 2,

    image: "/chapter_2.jpeg",
  },
  {
    id: 3,

    image: "/chapter_3.png",
  },
  {
    id: 4,

    image: "/project_4.png",
  },
  {
    id: 5,

    image: "/project_1.png",
  },
  {
    id: 6,

    image: "/project_2.png",
  },
  {
    id: 7,

    image: "/chapter_7.png",
  },
  {
    id: 8,

    image: "/project_3.png",
  },
  {
    id: 9,

    image: "/chapter_9.png",
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
