import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  cabook,
  clone,
  chatting,
  threejs,
  dicot,
  creatospace,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Node.js and Express.js Backend Intern",
    company_name: "The Tann Mann Gaadi Foundation (NGO)",
    icon: figma,
    iconBg: "#383E56",
    date: "",
    points: [
      "Volunteer contribution to generate funds for the NGO.",
      "APIs Integration and development",
      "Also worked with ReactJS, Javascript and Bootstrap.",
      "Direct interaction with clients for product related discussions",
    ],
  },
  {
    title: "MERN and Three.js Developer Intern",
    company_name: "Creatospace",
    icon: creatospace,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining metaverse using MERN, three.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer Intern",
    company_name: "Dicot",
    icon: dicot,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hacktober Fest '21",
    name: "Contributor",
    designation: "",
    company: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNramA8s3Rt2x_w6FL1p70fKHTOZAVy4QIpImkS_qWzYyB09hpQGiGWHhJdjCws2S9w_A&usqp=CAU",
  },
  {
    testimonial:
      "GSWOC 2021",
    name: "Contributor",
    designation: "",
    company: "",
    image: "https://pbs.twimg.com/profile_images/1418473557126901762/UAml02ni_400x400.jpg",
  },
  {
    testimonial:
      "GSSOC 2021 and others...",
    name: "Participant/Contributor",
    designation: "",
    company: "",
    image: "https://repository-images.githubusercontent.com/331823142/9764a900-5c8e-11eb-9f94-da2a01385e83",
  },
];

const projects = [
  {
    name: "Chatting Website like Microsoft Teams",
    description:
      "Chatting website with group chat, teams creation, user data storage in local storage features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chatengine",
        color: "pink-text-gradient",
      },
    ],
    image: chatting,
    source_code_link: "https://github.com/Adityaarora08/Chatting-Website-in-React-JS",
  },
  {
    name: "Mi Store Clone",
    description:
      "Cloned the frontend of brand website and dynamic data updating using JSON file deployed using netlify.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "json",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: clone,
    source_code_link: "https://github.com/Adityaarora08/MI-Store-Clone",
  },
  {
    name: "Cab Booking system with backend",
    description:
      "A comprehensive cab booking platform that allows users to book cabs with Dijsktra Algorithm implemented for shortest path between destinations and email confirmations on bookings using SMTP.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mondodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: cabook,
    source_code_link: "https://github.com/Adityaarora08/Cab-Booking-System-Full-Stack",
  },
];

export { services, technologies, experiences, testimonials, projects };
