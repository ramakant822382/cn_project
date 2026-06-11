import styles from "./Project.module.css";

const projects = [
  {
    id: 1,
    image: "/project_1.png",
    title: "Computer Network",
    description: "Network communication and routing project.",
  },
  {
    id: 2,
    image: "/project_2.png",
    title: "IoT Project",
    description: "Smart home automation using IoT.",
  },
  {
    id: 3,
    image: "/project_3.png",
    title: "Attendance System",
    description: "Face recognition attendance system.",
  },
];

function Project() {
  return (
    <section className={styles.projectSection}>
      <h1 className={styles.heading}>Our Projects</h1>

      <div className={styles.projectContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />

            <div className={styles.content}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button>View Project</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
