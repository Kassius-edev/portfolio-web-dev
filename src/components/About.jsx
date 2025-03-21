import React from "react";
import AboutMe from "../assets/about-me-image.jpg";

function About() {
  return (
    <div id="about" className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center  mb-12">About Me</h2>
        <div className="flex flex-col items-center md:flex-row  md:space-x-12">
          <img
            className="rounded-full w-80 h-80 md:w-96 md:h-96 lg:w-104 lg:h-104 lg:mr-24 object-cover mb-8 md:mb-0"
            src={AboutMe}
            alt=""
          />
          <div className="flex-1">
            <p className="mb-8 text-lg ">
              Hi there! I'm Wanderson Kassius, a passionate full-stack web
              developer specializing in the MERN stack. I love building dynamic,
              scalable, and user-friendly web applications that solve real-world
              problems. <br /> With a strong foundation in JavaScript, HTML,
              CSS, and Tailwind CSS, I focus on creating clean, responsive, and
              efficient interfaces. On the backend, I leverage Node.js and
              Express to develop robust APIs and seamless database integrations
              with MongoDB.
              <br /> Beyond coding, I enjoy sharing my journey and projects,
              continuously learning new technologies, and collaborating with
              other developers. I'm always up for new challenges and
              opportunities to create innovative digital experiences.
              <br />
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label
                  className="w-2/12 md:text-sm lg:text-lg"
                  htmlFor="htmlandcss"
                >
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label
                  className="w-2/12 md:text-sm lg:text-lg"
                  htmlFor="reactjs"
                >
                  React Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label
                  className="w-2/12 md:text-sm lg:text-lg"
                  htmlFor="nodejs"
                >
                  Node Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  35+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
