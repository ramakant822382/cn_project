import TeamCard from "../TeamCard/TeamCard";
import styles from "../Card/Card.module.css";

const students = [
  {
    image: "/Card/image_1.jpeg",
    name: "Akash Sharma",
    enrollment: "SSRGSP/ELX/2025/2/001",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/image_3.jpeg",
    name: "Aarati Surya",
    enrollment: "SSRGSP/ELX/2025/2/003",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/image_4.jpeg",
    name: "Aman Rathore",
    enrollment: "SSRGSP/ELX/2025/2/004",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/image_5.jpeg",
    name: "Anisha Shukla",
    enrollment: "SSRGSP/ELX/2025/2/005",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Ankit Hatila.jpeg",
    name: "Ankit Hatila",
    enrollment: "SSRGSP/ELX/2025/2/006",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Ankit Pandey.jpeg",
    name: "Ankit Pandey",
    enrollment: "SSRGSP/ELX/2025/2/007",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Ayush Chauhan.jpeg",
    name: "Ayush Chauhan",
    enrollment: "SSRGSP/ELX/2025/2/009",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Ayush Thakur.jpeg",
    name: "Ayush Thakur",
    enrollment: "SSRGSP/ELX/2025/2/010",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Basant.jpeg",
    name: "Basant",
    enrollment: "SSRGSP/ELX/2025/2/011",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Chirag Patidar.jpeg",
    name: "Chirag Patidar",
    enrollment: "SSRGSP/ELX/2025/2/012",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Devchand Ahirwar.jpeg",
    name: "Devchand Ahirwar",
    enrollment: "SSRGSP/ELX/2025/2/013",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Dhirendra Kumar.jpeg",
    name: "Dhirendra Kumar",
    enrollment: "SSRGSP/ELX/2025/2/015",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Dhun.jpeg",
    name: "Dhun Singh Thakur",
    enrollment: "SSRGSP/ELX/2025/2/016",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Dipit Dwivedi.jpeg",
    name: "Dipit Kumar Dwivedi",
    enrollment: "SSRGSP/ELX/2025/2/017",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Faizan Nagori.jpeg",
    name: "Faizan Nagori",
    enrollment: "SSRGSP/ELX/2025/2/018",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Gulshan Kumar.jpeg",
    name: "Gulshan",
    enrollment: "SSRGSP/ELX/2025/2/019",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Hemant Shakyawar.jpeg",
    name: "Hemant Shakywar",
    enrollment: "SSRGSP/ELX/2025/2/020",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Himanshu Pawar.jpeg",
    name: "Himansu Singh Panwar",
    enrollment: "SSRGSP/ELX/2025/2/021",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Ifran.jpeg",
    name: "Irfan",
    enrollment: "SSRGSP/ELX/2025/2/022",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Jankuar Meravi.jpeg",
    name: "Jankunwar Mervi",
    enrollment: "SSRGSP/ELX/2025/2/024",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Jasveer.jpeg",
    name: "Jasveer Singh",
    enrollment: "SSRGSP/ELX/2025/2/025",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Jayanti Badole.jpeg",
    name: "Jayanti Badole",
    enrollment: "SSRGSP/ELX/2025/2/026",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Jaynendra Sen.jpeg",
    name: "Jaynendra Kumar Sen",
    enrollment: "SSRGSP/ELX/2025/2/027",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Jitendra Chopda.jpeg",
    name: "Jitendra Chopda",
    enrollment: "SSRGSP/ELX/2025/2/028",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Kishan Kumar Tiwari.jpeg",
    name: "Kishan Tiwari",
    enrollment: "SSRGSP/ELX/2025/2/029",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Krishan Kumar Rajore.jpeg",
    name: "Krishan Kumar Rajore",
    enrollment: "SSRGSP/ELX/2025/2/030",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Kunal.jpeg",
    name: "Kunal Bansiwal",
    enrollment: "SSRGSP/ELX/2025/2/031",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Monica.jpeg",
    name: "Monica Lowanshi",
    enrollment: "SSRGSP/ELX/2025/2/033",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Neelesh Vishwakarma.jpeg",
    name: "Neelesh Vishwakarma",
    enrollment: "SSRGSP/ELX/2025/2/034",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Panjak Gupta.jpeg",
    name: "Pankaj Gupta",
    enrollment: "SSRGSP/ELX/2025/2/036",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Pankaj Uikey.jpeg",
    name: "Pankaj Uikey",
    enrollment: "SSRGSP/ELX/2025/2/037",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Pravesh Dixit.jpeg",
    name: "Pravesh Dixit",
    enrollment: "SSRGSP/ELX/2025/2/039",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Prayas Mandvi.jpeg",
    name: "Prayas Mandvi",
    enrollment: "SSRGSP/ELX/2025/2/040",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Rama Meena.jpeg",
    name: "Rama Meena",
    enrollment: "SSRGSP/ELX/2025/2/041",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/RAMA.png",
    name: "Ramakant Sharma",
    enrollment: "SSRGSP/ELX/2025/2/042",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Shahid Patel.jpeg",
    name: "Shahid Patel",
    enrollment: "SSRGSP/ELX/2025/2/044",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Shivraj Singh.jpeg",
    name: "Shivraj Singh",
    enrollment: "SSRGSP/ELX/2025/2/045",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Sonu Pawar.jpeg",
    name: "Sonu Pawar",
    enrollment: "SSRGSP/ELX/2025/2/046",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Vikram.jpeg",
    name: "Vikram Kushwaha",
    enrollment: "SSRGSP/ELX/2025/2/049",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
  {
    image: "/Card/Vishal Parmar.jpeg",
    name: "Vishal Parmar",
    enrollment: "SSRGSP/ELX/2025/2/050",
    year: "2026",
    course: "Advanced Electronics (IOT)",
  },
];

function Card() {
  return (
    <>
      <h1 className={styles.heading}>Our Batch</h1>
      <div className={styles.container}>
        {students.map((student, index) => (
          <TeamCard key={index} {...student} />
        ))}
      </div>
    </>
  );
}

export default Card;
