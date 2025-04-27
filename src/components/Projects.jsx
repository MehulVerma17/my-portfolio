import { Children } from "react";
import image1 from "/image1.jpeg";
import image2 from "/image2.JPG";
import image3 from "/image3.jpg";
import image4 from "/image4.JPG";
import image5 from "/image5.png";
import { motion } from "framer-motion";

const projectData = [
  {
    image: image1,
    title: "Sentiment Analysis",
    description:
      "This project is a web application built with Flask that scrapes comments from a YouTube video and performs a sentiment analysis. It visualizes the sentiments (positive, negative, neutral) of the comments in a bar chart and doughnut chart.",
    technologies: [
      "Python",
      "Flask",
      "vaderSentiment",
      "HTML",
      "Bootstrap",
      "JavaScript",
      "Chart.js",
    ],
  },
  {
    image: image2,
    title: "Invoice Generator",
    description:
      "A modern web-based invoice generator built with React and Tailwind CSS for the frontend, and Express.js for the backend PDF generation. Users can create and download professionally styled invoices with support for dynamic currency, custom logo upload, and client/item details.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express",
      "html-pdf-node",
      "Node.js",
      "DaisyUi",
      "Vercel",
      "Railway",
    ],
  },
  {
    image: image3,
    title: "DreamBuild",
    description:
      "DreamBuild is a mobile application that allows users to build their own custom prebuilt PCs by choosing from a wide range of compatible components. The app makes it easy to select parts like CPU, GPU, RAM, Storage, and more — tailored to your needs, whether you’re a gamer, creator, or casual user.",
    technologies: ["Java", "SQLite", "Firebase", "Android Studio"],
  },
  {
    image: image4,
    title: "PerfectlyPlannedEvents",
    description:
      "As part of a one-day hackathon challenge, I developed PerfectlyPlannedEvents, a venue booking web app built with Java, JavaScript, HTML, and CSS.The app allows users to book event venues for specific time slots, ensuring smooth and efficient bookings.I focused on delivering the core functionality with a quick deployment time.",
    technologies: ["Java", "JavaScript", "HTML", "CSS"],
  },
  {
    image: image5,
    title: "iMightFixIt",
    description:
      "launched an online mobile repair booking website as part of the Web-a-thon event.The platform features a smooth, user-friendly system that allows customers to easily schedule repair services online. I also developed a lightweight admin panel to manage service bookings. By focusing on both user experience and admin-side optimization.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl 
      transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center 
  justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
