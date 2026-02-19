// import gsap from "gsap";
// import { useRef } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CodeIcon from "@mui/icons-material/Code";
import xo from "../assets/xo.png";
import muslimParadise from "../assets/muslimParadise.png";
const projects = [
  {
    name: "Pixel Craft",
    demo: "https://github.com/Mo0Hamdy/e-commerce",
    live: "https://e-commerce-beta-flame-98.vercel.app/",
    image: xo,
    techs: [
      "nextjs/nextjs-original.svg",
      "redux/redux-original.svg",
      "materialui/materialui-original.svg",
      "tailwindcss/tailwindcss-original.svg",
    ],
  },
  {
    name: "Muslim Paradise",
    demo: "https://github.com/Mo0Hamdy/Quran-Player",
    live: "https://mo0hamdy.github.io/Quran-Player/",
    image: muslimParadise,
    techs: [
      "react/react-original.svg",
      "tailwindcss/tailwindcss-original.svg",
      "materialui/materialui-original.svg",
    ],
  },
  {
    name: "XO",
    demo: "https://github.com/Mo0Hamdy/X-O",
    live: "https://mo0hamdy.github.io/X-O/",
    image: xo,
    techs: [
      "html5/html5-original.svg",
      "css3/css3-original.svg",
      "javascript/javascript-original.svg",
      "sass/sass-original.svg",
    ],
  },
  {
    name: "Weather App",
    demo: "https://github.com/Mo0Hamdy/weather-app",
    live: "https://mo0hamdy.github.io/weather-app/",
    image: xo,
    techs: [
      "react/react-original.svg",
      "redux/redux-original.svg",
      "materialui/materialui-original.svg",
      "axios/axios-plain.svg",
    ],
  },
  {
    name: "Todo App",
    demo: "https://github.com/Mo0Hamdy/TodoList-React",
    live: "https://mo0hamdy.github.io/TodoList-React/",
    image: xo,
    techs: ["react/react-original.svg", "materialui/materialui-original.svg"],
  },
  {
    name: "Attack on titan",
    demo: "https://github.com/Mo0Hamdy/Attack-On-Titan",
    live: "https://mo0hamdy.github.io/Attack-On-Titan/",
    image: xo,
    techs: ["html5/html5-original.svg", "css3/css3-original.svg"],
  },
];
const projectsDetails = projects.map((element, index) => {
  return (
    <div className="bg-teal-300 w-80 flex-shrink-0 p-3" key={index}>
      <h2 className="text-xl">{element.name}</h2>
      <a
        className="w-1/2 relative inline-block overflow-hidden after:absolute after:content-[''] after:-left-full hover:after:translate-x-full after:transition-all after:duration-500 after:h-full after:w-full after:bg-red-500 "
        target="_blank"
        href={element.live}
      >
        {" "}
        <RemoveRedEyeIcon style={{ position: "relative", zIndex: "10" }} />
      </a>
      <a
        className="w-1/2 relative inline-block overflow-hidden after:absolute after:content-[''] after:-left-full hover:after:translate-x-full after:transition-all after:duration-500 after:h-full after:w-full after:bg-red-500 "
        target="_blank"
        href={element.demo}
      >
        {" "}
        <CodeIcon style={{ position: "relative", zIndex: "10" }} />
      </a>
      <ul className="flex justify-center">
        {element.techs.map((item, i) => {
          return (
            <li key={i}>
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}`}
                alt=""
                className="w-12 rounded-full border bg-white p-1"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default function Projects() {
  return (
    <>
      <h1 className="text-center font-extrabold text-3xl md:text-6xl text-gray-400 tracking-wider">
        Projects
      </h1>
      <p className="text-center text-xl md:text-2xl text-gray-300">
        My Best Achievements
      </p>
      <div className="container m-auto flex flex-wrap justify-center gap-10 my-12">
        {projectsDetails}
      </div>
    </>
  );
}
