import styles from "./About.module.css";
import Info from "./Info";
import Team from "./Team";

const About = () => {
  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          {/* Left Side */}
          <div className={styles.trainerCard}>
            <img
              src="/images/alok_sir.png"
              alt="Principal Trainer"
              className={styles.trainerImg}
            />

            <h3>Principal Trainer</h3>
            <p>Mr. Alok Ranjan</p>

            <h3>Contact No.</h3>
            <p>+91 8109396525</p>
          </div>

          {/* Center Content */}
          <div className={styles.content}>
            <h1>Advanced Electronics (Mobile Devices & IoT)</h1>

            <p>
              The demand for modern and high-tech communication networks has
              increased significantly with the increase of mobile devices and
              the use of digital services. The Internet of Things (IoT) creates
              opportunities for electronics professionals across domains like
              smart homes, industrial automation, healthcare, agriculture, and
              transportation.
            </p>

            <p>
              An Electronics professional is responsible for setting up,
              maintaining and repairing electronic systems, mobile devices and
              communication equipment. They diagnose malfunctions, perform
              tests, and follow technical manuals to ensure proper functioning
              of equipment.
            </p>

            <a href="/" className={styles.downloadBtn}>
              Brochure Download
            </a>
          </div>

          {/* Right Side */}
          <div className={styles.imageWrapper}>
            <span className={styles.badge}>(One Year Course)</span>

            <img
              src="/images/student.png"
              alt="Advanced Electronics Lab"
              className={styles.courseImg}
            />
          </div>
        </div>
      </section>

      <Info />

      <Team />
    </>
  );
};

export default About;
