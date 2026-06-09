import styles from "../TeamCard/TeamCard.module.css";

const TeamCard = ({ image, name, enrollment, year, course }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />

      <h2 className={styles.name}>{name}</h2>

      <div className={styles.info}>
        <p>
          <strong className={styles.label}>Enrollment :</strong> {enrollment}
        </p>

        <p>
          <strong className={styles.label}>Passing Year :</strong> {year}
        </p>

        <p>
          <strong className={styles.label}>Course :</strong> {course}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;