import styles from "./Team.module.css";
const teamMembers = [
  {
    image: "/images/puneet_sir.png",
    name: "Mr. Puneet Namdeo",
    designation: "Trainer  (Computer Network & AI/ML)",
  },
  {
    image: "/images/vijay_sir.png",
    name: "Mrs. Vijay Bhatt",
    designation: "Trainer  (Digital Principal & Application)",
  },
  {
    image: "/images/subodh_sir.png",
    name: "Mr. Subodh",
    designation: "Trainer  (Electronics Principal & Application)",
  },
  {
    image: "/images/gurav_sir.png",
    name: "Mr. Gurav Sharma",
    designation: "Trainer  (Microcontroller & Application)",
  },
];

function Team() {
  return (
    <section className={styles.teamSection}>
      <h1 className={styles.title}>Our Leadership Team</h1>

      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div className={styles.card} key={index}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.image}
            />

            <h3>{member.name}</h3>

            <h5>{member.designation}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
