export default function Skills() {
  const skills = [
    {
      color: "#E34F26",
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      color: "#663399",
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      color: "#F7DF1E",
      name: "Java Script",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      color: "#7952B3",
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
      color: "#CC6699",
      name: "SCSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
    {
      color: "#61DAFB",
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      color: "#764ABC",
      name: "Redux",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
    {
      color: "#007FFF",
      name: "Material UI",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    },
    {
      color: "#000000",
      name: "Next",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      color: "#F05032",
      name: "GIT",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      color: "#181717",
      name: "Github",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      color: "#646CFF",
      name: "Vite",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
      color: "#FF6C37",
      name: "Postman",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      color: "#5A29E4",
      name: "Axios",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    },
  ];
  const skillsBlock = skills.map((element, index) => {
    return (
      <div
        key={index}
        className="w-32 h-32 sm:w-56 sm:h-56 border flex flex-col justify-between flex-shrink-0 p-5 m-5 rounded-xl shadow-xl "
        style={{
          border: `2px solid ${element.color}`,
          boxShadow: `0 10px 25px ${element.color}40`,
        }}
      >
        <img
          className="w-3/4 m-auto hover:scale-110 duration-300"
          src={element.img}
          alt={element.name}
        />
        <h2 className="text-center m-auto text-sm sm:text-lg text-gray-400 hover:text-gray-500 hover:scale-110 transition-all duration-300 font-bold tracking-wider">
          {element.name}
        </h2>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-center font-extrabold text-6xl text-gray-400 tracking-wider">
        Skills
      </h1>
      <p className="text-center text-2xl text-gray-300">
        Technologies I work with
      </p>
      <div className="flex flex-wrap justify-center items-center my-12">
        {skillsBlock}
      </div>
    </>
  );
}
