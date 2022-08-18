import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const skills = [
    {
      id: 1,
      name: "Html",
      img: "/assets/skills/html.png",
      aos: "fade-up",
    },
    {
      id: 2,
      name: "Css",
      img: "/assets/skills/css.png",
      aos: "fade-up-right",
    },
    {
      id: 3,
      name: "Javascript",
      img: "/assets/skills/javascript.png",
      aos: "fade-up",
    },
    {
      id: 4,
      name: "React",
      img: "/assets/skills/react.png",
      aos: "fade-up-right",
    },
    {
      id: 5,
      name: "Tailwind",
      img: "/assets/skills/tailwind.png",
      aos: "fade-up",
    },
    {
      id: 6,
      name: "Github",
      img: "/assets/skills/github1.png",
      aos: "fade-up-right",
    },
    {
      id: 7,
      name: "Firebase",
      img: "/assets/skills/firebase.png",
      aos: "fade-up",
    },
    {
      id: 8,
      name: "NextJS",
      img: "/assets/skills/nextjs.png",
      aos: "fade-up-right",
    },
    {
      id: 9,
      name: "mongoDb",
      img: "/assets/skills/mongo.png",
      aos: "fade-up",
    },
    {
      id: 10,
      name: "express",
      img: "/assets/skills/expressjs.png",
      aos: "fade-up-right",
    },
    {
      id: 11,
      name: "sql",
      img: "/assets/skills/mysql.png",
      aos: "fade-up",
    },
    {
      id: 12,
      name: "typescript",
      img: "/assets/skills/typescript.png",
      aos: "fade-up-right",
    },
  ];
  return (
    <div
      id="skills"
      className="w-full lg:h-screen  bg-[#121212] text-white pt-6"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h1
          className="text-4xl mb-5 text-teal-500 font-bold sm:text-5xl ml-4"
          data-aos="fade-in"
        >
          #What Can I Do
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill) => {
            return (
              <div
                className=" mx-4 p-6 shadow-xl  bg-slate-900 rounded-2xl hover:bg-slate-600 animate__cursor  hover:scale-105 ease-in duration-300"
                data-aos={skill.aos}
                key={skill.id}
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={skill.img} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
