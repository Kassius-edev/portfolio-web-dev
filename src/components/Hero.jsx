import React from "react";
import HeroImage from "../assets/hero-image.png";

function Hero() {
  return (
    <div id="home" className="bg-black text-white text-center py-16">
      <img
        className="mx-auto mb-8 w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        src={HeroImage}
        alt=""
      />
      <h1 className="text-4xl tracking-tight font-bold md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-tight ">
        I'm {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
          Wanderson Kassius
        </span>
        , Fullstack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I'm a passionate developer skilled in the MERN stack and other modern
        web technologies.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full transform transition-transform duration-300 hover:scale-105 px-4 py-2">
          <a href="#contact"> Contact Me</a>
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-yellow-500 text-white rounded-full transform transition-transform duration-300 hover:scale-105 px-4 py-2">
          <a
            href="" //update real resume.
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
