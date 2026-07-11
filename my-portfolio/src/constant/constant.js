import {
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLeetcode,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IMAGES } from "./image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Sparkles, Code2 } from "lucide-react";

export const PROJECTS = [
  {
    title: "Smart Hotel Website Auto Generator",
    category: "Full Stack Development (FYP Project)",
    description:
      "Developed a hotel website generator that creates customized hotel management systems based on selected modules. It automatically generates a production-ready Next.js application.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "NextAuth",
      "Tailwind CSS",
      "Nodemailer",
    ],
    image: IMAGES.WEBSITEBUILDER,
    github: "https://github.com/Usamasarwar026/Final-Year-Project",
    live: "https://final-year-project-azure-one.vercel.app",
  },
  {
    title: "URL Shortener",
    category: "Full Stack Development",
    description:
      "Built a full-stack URL Shortener using Next.js, TypeScript, Prisma ORM, and MongoDB. Features secure authentication, custom short links, QR code generation, URL management, and a responsive user dashboard.",
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "MongoDB",
      "Prisma ORM",
      "NextAuth",
      "Tailwind CSS",
      "Nodemailer",
      "QR Code",
    ],
    image: IMAGES.URLSHORTNER,
    github: "https://github.com/Usamasarwar026/url-shortner",
    live: "https://url-smoky.vercel.app",
  },
  {
    title: "NFT Marketplace",
    category: "Frontend Development",
    description:
      "Built a responsive NFT Marketplace using React, TypeScript, and Redux Toolkit, integrated with the OpenSea API to fetch live NFT collections and detailed metadata. Features trending collections, dynamic NFT detail pages, auction timers, and a fully responsive UI across devices.",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Axios",
      "React Router",
      "Tailwind CSS",
      "OpenSea API",
    ],
    image: IMAGES.NFTMARKETPLACE,
    github: "https://github.com/Usamasarwar026/NFT-MarketPlace",
    live: "https://nft-techloset.netlify.app",
  },
  {
    title: "Income Expense Tracker App",
    category: "Mobile App Development",
    description:
      "Built an offline-first Income Expense Tracker using React Native, TypeScript, Redux Toolkit, and SQLite. Features secure authentication, category management, income and expense tracking, financial reports, interactive charts, multiple currency support, and a responsive mobile UI.",
    stack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "SQLite",
      "React Navigation",
      "AsyncStorage",
      "CSS",
    ],
    image: IMAGES.INCOMEEXPENSETRACKER,
    github: "https://github.com/Usamasarwar026/IncomeExpenseTracker",
    live: "https://drive.google.com/drive/folders/1EpYJRGX_6hio5yZwXFjEUkZ8SjrHA0QY?usp=sharing",
  },
  {
    title: "Smart Notes App",
    category: "Mobile App Development",
    description:
      "Built a cloud-based note-taking application using Kotlin and Firebase. Features secure authentication, cloud-synced CRUD operations, note search, timestamps, notifications, and a clean Material Design interface for seamless note management across devices.",
    stack: [
      "Kotlin",
      "Firebase Authentication",
      "Firebase Firestore",
      "MVVM",
      "Material Design",
      "RecyclerView",
    ],
    image: IMAGES.SMARTNOTES,
    github: "https://github.com/Usamasarwar026/Smart_Notes_App",
    live: "https://drive.google.com/drive/folders/15uqp9OVj6p-CrqDlT7P8BQ-AgRFE3zSG?usp=drive_link",
  },
  {
    title: "Car Rental Management System",
    category: "Full Stack Development",
    description:
      "Developed a full-stack Car Rental Management System using Next.js, TypeScript, Prisma ORM, and MySQL. Features secure authentication, car inventory management, booking system, payment integration, and a responsive user dashboard for seamless car rental operations.",
    stack: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "Prisma ORM",
      "NextAuth",
      "Tailwind CSS",
      "Contentful CMS",
      "Stripe Payment Integration",
    ],
    image: IMAGES.CARRENTAL,
    github: "https://github.com/Usamasarwar026/car-rental-management-master",
    live: "",
  },
  {
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    description:
      "A responsive personal portfolio website built with React, featuring multi-page navigation, scroll-triggered animations, and a dynamic typewriter effect to showcase my skills and projects.",
    stack: [
      "React",
      "React Router DOM",
      "Bootstrap",
      "AOS",
      "React Icons",
      "React Toastify",
      "CSS",
    ],
    image: IMAGES.PORTFOLIO,
    github: "https://github.com/Usamasarwar026/Portfolio-React",
    live: "https://usama-sarwar.netlify.app",
  },
  {
    title: "Ai Image Generator",
    category: "Frontend Development",
    description:
      "A modern AI image generator landing page built with Next.js and Tailwind CSS, showcasing AI-powered image generation with a responsive design.",
    stack: ["Next.js", "Tailwind CSS"],
    image: IMAGES.IMAGEGENERATOR,
    github: "https://github.com/Usamasarwar026/Ai-Generator-Frontend",
    live: "https://ai-image-generator-rho-henna.vercel.app",
  },
  {
    title: "Blog Website",
    category: "Frontend Development",
    description:
      "A blog website built with React and Tailwind CSS, featuring a clean and modern design for sharing articles and content.",
    stack: ["React.js", "Tailwind CSS"],
    image: IMAGES.BLOGWEBSITE,
    github: "https://github.com/Usamasarwar026/React-Blog-Website",
    live: "https://react-blog-website-tau.vercel.app",
  },
  {
    title: "Tropiko Fruit",
    category: "Frontend Development",
    description:
      "A fruit e-commerce website built with html, css, and javascript, featuring a clean and modern design for selling fruits online.",
    stack: ["Html", "CSS3", "Javascript"],
    image: IMAGES.TROPIKOFRUIT,
    github: "https://github.com/Usamasarwar026/Tropiko-Fruit",
    live: "https://tropiko-fruit.vercel.app",
  },
  {
    title: "Umair Cuisine",
    category: "Frontend Development",
    description:
      "A food website built with html, css, and javascript, featuring a clean and modern design for sharing recipes and food content.",
    stack: ["Html", "CSS3", "Javascript"],
    image: IMAGES.CUISINE,
    github: "https://github.com/Usamasarwar026/Cuisine-Food-in-html",
    live: "https://cuisine-food-in-html.vercel.app",
  },
  {
    title: "Student Record App",
    category: "Frontend Development",
    description:
      "A CRUD APP built with React, featuring a clean and modern design for collecting student input.",
    stack: ["React.js", "Material UI"],
    image: IMAGES.STUDENTRECORDAPP,
    github: "https://github.com/Usamasarwar026/student-record-app",
    live: "https://students-record-app-two.vercel.app",
  },
  {
    title: "Eco Store",
    category: "Frontend Development",
    description:
      "A sustainable e-commerce website built with React and Bootstrap, featuring a clean and modern design for selling eco-friendly products by using fake store api.",
    stack: ["React.js", "Bootstrap", "Fake Store API", "Redux Toolkit"],
    image: IMAGES.ECOSTORE,
    github: "https://github.com/Usamasarwar026/E-Commerce-Store",
    live: "https://usama-eco-store.vercel.app",
  },
  {
    title: "Social App",
    category: "Full Stack Development",
    description:
      "A social media app built with React and Firebase, featuring a clean and modern design for connecting with friends and posting content.",
    stack: ["React.js", "Bootstrap", "Firebase", "Redux Toolkit"],
    image: IMAGES.SOCIALAPP,
    github: "https://github.com/Usamasarwar026/Social-App",
    live: "https://us-social.vercel.app",
  },
  {
    title: "Amazon Clone",
    category: "Frontend Development",
    description:
      "Developed a fully responsive Amazon homepage clone using HTML5, CSS3, Bootstrap 5, and JavaScript. Implemented responsive navigation, offcanvas sidebar, image carousel, product cards, dropdown menus, shopping cart interface, and responsive product sections while closely replicating the original Amazon UI.",
    stack: ["Html", "CSS3", "JavaScript", "Bootstrap 5"],
    image: IMAGES.AMAZONCLONE,
    github: "https://github.com/Usamasarwar026/Amazon-Clone",
    live: "https://usama-amazon-clone.vercel.app",
  },
  {
    title: "Scientific Calculator",
    category: "Frontend Development",
    description:
      "Developed a fully responsive scientific calculator using HTML5, CSS3, and vanilla JavaScript. Implemented trigonometric, logarithmic, factorial, and power functions with a custom safe expression evaluator, along with proper error handling and a mobile-friendly responsive layout.",
    stack: ["Html", "CSS3", "JavaScript"],
    image: IMAGES.SCIENTIFICCALCULATOR,
    github: "https://github.com/Usamasarwar026/Scientific-Calculator",
    live: "https://usama-scientific-calculator.vercel.app",
  },
  {
    title: "Counter App",
    category: "Frontend Development",
    description:
      "Built a responsive counter application using React and Redux Toolkit for global state management. Implemented increment, decrement, and reset functionality with a zero-floor safeguard to prevent negative values, along with a clean, mobile-friendly UI using React Icons and smooth CSS transitions.",
    stack: ["React", "Redux Toolkit", "CSS3"],
    image: IMAGES.COUNTERAPP,
    github: "https://github.com/Usamasarwar026/Counter-App",
    live: "https://usama-counter-app.vercel.app",
  },
];

export const SOCIALS = [
  {
    Icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/u/Usama_Sarwar/",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinnkedIn",
    href: "https://www.linkedin.com/in/usama-sarwar-4b2a49260/",
  },
  {
    Icon: FaGithub,
    label: "Github",
    href: "http://github.com/Usamasarwar026",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const ROLES = [
  "Software Engineer",
  "MERN Stack Developer",
  "Full Stack Developer",
  "Next.js Engineer",
  "AI Enthusiast",
];

export const DESCRIPTION =
  "I am a Software Engineer with a BS in Software Engineering from Government College University Faisalabad. I have hands-on experience in Full Stack Web and Mobile Application Development through internships, remote collaborations, and personal projects. I am passionate about developing user-focused applications, solving real-world challenges, and continuously improving my technical expertise.";

export const EMAIL_ADDRESS = " usamasarwar160492@gmail.com";

//skills

export const CATEGORIES = [
  "All",
  "Languages",
  "Frontend",
  "Backend & Database",
  "Tools & Editors",
];

export const SKILLS = [
  { name: "HTML", icon: SiHtml5, color: "#E44D26", category: "Languages" },
  { name: "CSS", icon: SiCss3, color: "#1572B6", category: "Languages" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "Languages",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "Languages",
  },
  { name: "C++", icon: SiCplusplus, color: "#00599C", category: "Languages" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Languages" },

  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    category: "Frontend",
  },
  {
    name: "React Native",
    icon: SiReact,
    color: "#61DAFB",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
    category: "Frontend",
  },
  { name: "Material UI", icon: SiMui, color: "#007FFF", category: "Frontend" },

  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#8CC84B",
    category: "Backend & Database",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#FFFFFF",
    category: "Backend & Database",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#5A67D8",
    category: "Backend & Database",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    category: "Backend & Database",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    category: "Backend & Database",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    category: "Backend & Database",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    category: "Backend & Database",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    color: "#003B57",
    category: "Backend & Database",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    category: "Tools & Editors",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
    category: "Tools & Editors",
  },
  {
    name: "VS Code",
    icon: Code2,
    color: "#007ACC",
    category: "Tools & Editors",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    category: "Tools & Editors",
  },
  {
    name: "Cursor",
    icon: Sparkles,
    color: "#F0A868",
    category: "Tools & Editors",
  },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Developer Intern",
    company: "Techloset Solutions",
    duration: "Dec 2024 - Apr 2025",
    description:
      "Developed web and mobile applications using React, Next.js, and React Native. Implemented REST API and FastAPI CRUD operations, integrated Firebase, MongoDB, Prisma ORM, and third-party APIs across multiple real-world projects.",
  },
  {
    role: "Full Stack Developer (Remote)",
    company: "Codex",
    duration: "Feb 2025 - May 2025",
    description:
      "Contributed to the development of a Pharmacy Management System by working on both frontend and backend using React, PostgreSQL, and Sequelize. Assisted in REST API development, database integration, feature implementation, and software documentation in a remote team environment.",
  },
  {
    role: "Web & Mobile App Development Trainee",
    company: "Saylani Mass IT Training (SMIT)",
    duration: "2023 - 2024",
    description:
      "Completed an intensive Web & Mobile App Development program, building multiple real-world projects using HTML, CSS, JavaScript, React, React Native, Redux Toolkit, Next.js, Firebase, and REST APIs while strengthening problem-solving and full-stack development skills.",
  },
];
