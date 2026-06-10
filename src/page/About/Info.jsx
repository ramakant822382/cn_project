import styles from "./Info.module.css";

const facilities = [
  "Modern Test & Measuring Equipment",
  "Analogue and Digital Electronic Circuits Trainer System",
  "Workstation with Anti-static Mat Kit with Wrist Strap and a Grounding Cord",
  "Wi-Fi Router with LAN Ports Compliant to IEEE 802.11g/n/ac",
  "Go/NoGo Mobile Tester (GSM 900/1800 & UMTS/LTE)",
  "Sensors & Actuators Training System",
  "IoT Integration Training System",
  "Embedded Microcontroller Module",
  "Single Board Computer",
];

const features = [
  "Identify and check system components of analog and digital electronic circuits, computer network, microcontroller interfacing and IoT system.",
  "Use modern Test and Measuring instruments.",
  "Interpret Electronic circuits of Mobile devices and communication equipment.",
  "Perform functional checks of Mobile Devices and conduct signalling and connectivity tests.",
  "Configure and set up mobile device, manage security, restore backup and troubleshoot its hardware modules.",
  "Install, test, and troubleshoot computer network and IoT system connectivity using suitable devices and equipment.",
  "Optimize Network Performance.",
];

const jobs = [
  "Electrical Service Professionals",
  "Sales and Marketing Professionals",
  "System House Engineer/Technician",
  "Electrical Engineer/Technician",
];

const Info = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.intro}>
        To cater the current National and International demand, GSP is offering
        one year programme in Advanced Electronics.
      </p>

      {/* Training Facilities */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Training Facilities</h2>

        <div className={styles.facilitiesGrid}>
          {facilities.map((item, index) => (
            <div key={index} className={styles.card}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Key Features of the Course</h2>

        <div className={styles.featureGrid}>
          {features.map((item, index) => (
            <div key={index} className={styles.featureItem}>
              ➤ {item}
            </div>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Duration</h2>
        <p className={styles.text}>One Year Course</p>
      </div>

      {/* Eligibility */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Admission Eligibility</h2>

        <p className={styles.text}>
          ITI (Electronics Mechanic / Instrumentation / IoT Technician / Medical
          Electronics / Consumer Electronics)
        </p>

        <p className={styles.or}>OR</p>

        <p className={styles.text}>
          Diploma/Degree in Electronics & Communication, Computer Science,
          Electrical & Electronics, Electronics & Instrumentation.
        </p>

        <p className={styles.or}>OR</p>

        <p className={styles.text}>B.Sc / M.Sc in Electronics</p>
      </div>

      {/* Jobs */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Job Opportunities</h2>

        <ul className={styles.jobList}>
          {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Info;
