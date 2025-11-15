import { Box } from "@mui/material";
import { SearchAndFilter } from "../components/common/SearchFilter";
import { MentorCard } from "../components/cards/MentorCard";
import { Carousel } from "../components/Carousel";
import { MentorsList } from "../components/MentorsList";

const mentors = [
  {
    name: "Alice Morgan",
    speciality: "Frontend Developer",
    taskNumber: 52,
    totalReviews: 380,
    starsNumber: 4.8,
    description:
      "Alice is a skilled frontend developer with expertise in React and modern UI frameworks. She focuses on building smooth, accessible, and high-performance web experiences.",
  },
  {
    name: "David Lee",
    speciality: "Backend Developer",
    taskNumber: 67,
    totalReviews: 540,
    starsNumber: 4.7,
    description:
      "David is passionate about scalable backend systems, API design, and database optimization. He has over 7 years of experience with Node.js, NestJS, and PostgreSQL.",
  },
  {
    name: "Sophia Kim",
    speciality: "Full Stack Engineer",
    taskNumber: 44,
    totalReviews: 320,
    starsNumber: 4.5,
    description:
      "Sophia enjoys working across the stack, from crafting APIs to designing intuitive user interfaces. She’s known for writing clean, maintainable code and mentoring junior developers.",
  },
  {
    name: "Michael Carter",
    speciality: "DevOps Engineer",
    taskNumber: 38,
    totalReviews: 290,
    starsNumber: 4.6,
    description:
      "Michael automates infrastructure and deployment pipelines with tools like Docker, Kubernetes, and Terraform. He focuses on improving CI/CD workflows and scalability.",
  },
  {
    name: "Elena Petrova",
    speciality: "Mobile Developer",
    taskNumber: 55,
    totalReviews: 410,
    starsNumber: 4.9,
    description:
      "Elena builds fast, responsive mobile apps with React Native and Flutter. She has led multiple cross-platform projects with millions of users worldwide.",
  },
  {
    name: "James Anderson",
    speciality: "Machine Learning Engineer",
    taskNumber: 32,
    totalReviews: 270,
    starsNumber: 4.4,
    description:
      "James specializes in ML model development, computer vision, and natural language processing. He’s passionate about applying AI to real-world problems.",
  },
  {
    name: "Maria Lopez",
    speciality: "UI/UX Designer",
    taskNumber: 48,
    totalReviews: 360,
    starsNumber: 4.7,
    description:
      "Maria creates user-centered designs that balance functionality and aesthetics. Her design philosophy revolves around simplicity, clarity, and empathy.",
  },
  {
    name: "Ryan Thompson",
    speciality: "Cloud Architect",
    taskNumber: 60,
    totalReviews: 500,
    starsNumber: 4.8,
    description:
      "Ryan designs cloud infrastructure with AWS and Azure, focusing on cost optimization, reliability, and performance. He’s certified across multiple cloud platforms.",
  },
  {
    name: "Aisha Khan",
    speciality: "Cybersecurity Specialist",
    taskNumber: 41,
    totalReviews: 310,
    starsNumber: 4.6,
    description:
      "Aisha works on vulnerability assessment, penetration testing, and secure coding practices. She helps organizations strengthen their security posture.",
  },
  {
    name: "Liam O’Connor",
    speciality: "Data Engineer",
    taskNumber: 50,
    totalReviews: 420,
    starsNumber: 4.5,
    description:
      "Liam builds reliable ETL pipelines and manages large-scale data warehouses. He focuses on efficiency, data quality, and real-time analytics.",
  },
  {
    name: "Alice Morgan",
    speciality: "Frontend Developer",
    taskNumber: 52,
    totalReviews: 380,
    starsNumber: 4.8,
    description:
      "Alice is a skilled frontend developer with expertise in React and modern UI frameworks. She focuses on building smooth, accessible, and high-performance web experiences.",
  },
  {
    name: "David Lee",
    speciality: "Backend Developer",
    taskNumber: 67,
    totalReviews: 540,
    starsNumber: 4.7,
    description:
      "David is passionate about scalable backend systems, API design, and database optimization. He has over 7 years of experience with Node.js, NestJS, and PostgreSQL.",
  },
  {
    name: "Sophia Kim",
    speciality: "Full Stack Engineer",
    taskNumber: 44,
    totalReviews: 320,
    starsNumber: 4.5,
    description:
      "Sophia enjoys working across the stack, from crafting APIs to designing intuitive user interfaces. She’s known for writing clean, maintainable code and mentoring junior developers.",
  },
  {
    name: "Michael Carter",
    speciality: "DevOps Engineer",
    taskNumber: 38,
    totalReviews: 290,
    starsNumber: 4.6,
    description:
      "Michael automates infrastructure and deployment pipelines with tools like Docker, Kubernetes, and Terraform. He focuses on improving CI/CD workflows and scalability.",
  },
  {
    name: "Elena Petrova",
    speciality: "Mobile Developer",
    taskNumber: 55,
    totalReviews: 410,
    starsNumber: 4.9,
    description:
      "Elena builds fast, responsive mobile apps with React Native and Flutter. She has led multiple cross-platform projects with millions of users worldwide.",
  },
  {
    name: "James Anderson",
    speciality: "Machine Learning Engineer",
    taskNumber: 32,
    totalReviews: 270,
    starsNumber: 4.4,
    description:
      "James specializes in ML model development, computer vision, and natural language processing. He’s passionate about applying AI to real-world problems.",
  },
  {
    name: "Maria Lopez",
    speciality: "UI/UX Designer",
    taskNumber: 48,
    totalReviews: 360,
    starsNumber: 4.7,
    description:
      "Maria creates user-centered designs that balance functionality and aesthetics. Her design philosophy revolves around simplicity, clarity, and empathy.",
  },
  {
    name: "Ryan Thompson",
    speciality: "Cloud Architect",
    taskNumber: 60,
    totalReviews: 500,
    starsNumber: 4.8,
    description:
      "Ryan designs cloud infrastructure with AWS and Azure, focusing on cost optimization, reliability, and performance. He’s certified across multiple cloud platforms.",
  },
  {
    name: "Aisha Khan",
    speciality: "Cybersecurity Specialist",
    taskNumber: 41,
    totalReviews: 310,
    starsNumber: 4.6,
    description:
      "Aisha works on vulnerability assessment, penetration testing, and secure coding practices. She helps organizations strengthen their security posture.",
  },
  {
    name: "Liam O’Connor",
    speciality: "Data Engineer",
    taskNumber: 50,
    totalReviews: 420,
    starsNumber: 4.5,
    description:
      "Liam builds reliable ETL pipelines and manages large-scale data warehouses. He focuses on efficiency, data quality, and real-time analytics.",
  },
];

export function Mentors() {
  return (
    <Box className="mentors">
      <Box className="header">
        <SearchAndFilter />
      </Box>
      <Box className="content">
        <Carousel
          label="Recent Mentors"
          length={10}
          children={
            <MentorCard
              name="somename"
              speciality="Backend Developer"
              taskNumber={40}
              totalReviews={500}
              starsNumber={4.6}
            />
          }
        />
        <MentorsList data={mentors} />
      </Box>
    </Box>
  );
}
