import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  weather,
  todoList,
  incmExpnsTrck,
  Blog
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
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  
];

// const experiences = [
//   {
//     title: "",
//     company_name: "",
//     icon: ,
//     iconBg: "",
//     date: "",
//     points: [],
//   },
 
// ];

const projects = [
  {
    name: "Income Expenses Tracker",
    description:
      "Web-based platform that allows users to check and manage their expenses for efficient saving.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: incmExpnsTrck,
    source_code_link: "https://github.com/Sujal059/Income-Expenses-Tracker",
  },
  {
    name: "Blog Web App",
    description:
      "Web application that enables users to post and view everyone's thoughts about a topic as a blog.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: Blog,
    source_code_link: "https://github.com/Sujal059/Blog-Fullstack",
  },
  {
    name: "To-Do List",
    description:
      "A dynamic Todo list web application aimed at simplifying task management and enhancing productivity. In this project, I utilized React.js to create a user-friendly front-end interface, enabling users to seamlessly add task.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todoList,
    source_code_link: "https://github.com/Sujal059/To-Do-List",
  },
  {
    name: "Weather Web App",
    description:
      "A Weather web application utilizing the Weatherbit.io API to fetch real-time weather data. Leveraging my expertise in React.js, I created a dynamic and intuitive user interface that provides users with up-to-date weather information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "weatherbitAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Sujal059/To-Do-List",
  },
];

export { services, technologies, projects };