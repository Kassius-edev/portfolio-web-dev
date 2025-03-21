import React from "react";
import BurgerImage from "../assets/burger-image.png";
import AmazonImage from "../assets/website-work-2.png";
import BarberImage from "../assets/website-work-3.png";

const projects = [
  {
    id: 1,
    name: "Burger Place App",
    technologies: "React & TailwindCSS",
    image: BurgerImage,
    github: "https://github.com/Kassius-edev",
  },
  {
    id: 2,
    name: "E-commerce App",
    technologies: "MERN Stack",
    image: AmazonImage,
    github: "https://github.com/Kassius-edev",
  },
  {
    id: 3,
    name: "Barber Shop Website",
    technologies: "React & TailwindCSS",
    image: BarberImage,
    github: "https://github.com/Kassius-edev",
  },
];

function Projects() {
  return (
    <div id="projects" className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center  mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
