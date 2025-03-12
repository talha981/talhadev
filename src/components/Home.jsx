import React from "react";
import { FaGithub, FaLinkedin, FaAt, FaArrowUp } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";

const Home = () => {
  return (
    <div className="flex flex-col px-4 sm:px-10 md:px-20   lg:md-24  items-start">
      {/* Profile Image - Mobile (Left-aligned) */}
      <div className="flex w-full mt-40 md:hidden mb-6">
        <img
          src="https://media.istockphoto.com/id/2204278263/vector/businessman-icon-with-sunbursts-on-white-background.jpg?s=612x612&w=0&k=20&c=4otG1U2PKV6xHTYyTiIFGH7OuhNGwlQ6Rso9ZRaERS0="
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
          alt="Profile"
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:mt-40 md:flex-row w-full md:items-start">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2  flex flex-col items-start text-left">
        <h1 className="text-3xl md:text-4xl font-bold">Hi, I'm <br/>  <span className="block mt-3 ">Talha Safdar</span> </h1>
        <p className="text-md mt-5 text-justify leading-relaxed">
            A passionate <span className="text-blue-500 font-semibold">Web Developer</span> pursuing a
            <span className="text-blue-500 font-semibold"> Software Engineering </span>
            degree at Pir Mehr Ali Shah Arid Agriculture University.
          </p>
          <p className="text-md text-justify leading-relaxed  ">
            I specialize in building high-performance, scalable applications with modern technologies.
          </p>

          {/* Resume Button & Social Icons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-3">
            {/* Resume Button */}
            <a
              href="/"
              className="flex items-center px-7 py-2 border-2 border-blue-500 rounded-lg text-white bg-bgColor hover:bg-gray-600 transition-all duration-300"
            >
              <FaArrowUp className="mr-2 text-md" />
              Resume
            </a>

            <div className="flex space-x-5 text-xl text-gray-400">
  <a
    href="mailto:safdartalha69@gmail.com"
    className="hover:text-gray-600 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaAt />
  </a>

  <a
    href="https://github.com/talha981"
    className="hover:text-gray-600 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/ta-lha-1b6a352a4/"
    className="hover:text-gray-600 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a
    href="/"
    className="hover:text-gray-600 transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MdArrowUpward />
  </a>
</div>

          </div>

         
        </div>

        {/* Right Side - Image (Hidden on mobile) */}
        <div className="hidden md:flex md:w-1/2 justify-end items-center">
          <img
            src="https://media.istockphoto.com/id/2204278263/vector/businessman-icon-with-sunbursts-on-white-background.jpg?s=612x612&w=0&k=20&c=4otG1U2PKV6xHTYyTiIFGH7OuhNGwlQ6Rso9ZRaERS0="
            className="w-72 h-72 rounded-full border-4 border-blue-500 shadow-lg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;