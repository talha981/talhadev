import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Award, BookOpen, Calendar, GraduationCap } from 'lucide-react';

const AboutHome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-start mt-14 px-4 sm:px-10 md:px-20 max-w-full">
<div className="flex  items-center  mb-8">
        <GraduationCap className="mr-3 text-blue-500" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-blue-500 pb-2">About Me</h1>
      </div>      <p className="text-md text-justify leading-relaxed">
        I am a Full Stack Web Developer skilled in modern technologies, including 
        <span className=""> JavaScript, React.js, Next.js, Node.js, MongoDB,</span> and  
        <span className=""> SQL (pgAdmin, MySQL).</span> I also specialize in  
        <span className=""> React Native</span> for mobile applications and have experience in  
        <span className=""> C, C++, Java,</span> and <span className=""> Python</span>,  
        working with libraries like <span className=""> spaCy.io</span> and  
        <span className=""> NumPy</span>. Passionate about building efficient, scalable solutions,  
        I continuously explore new technologies to deliver high-quality applications.
      </p>

      {/* Learn More Button */}
      <button
        onClick={() => navigate("/about")}
        className="mt-2 flex items-center text-blue-500 hover:underline"
      >
        ➜ Learn more
      </button>
    </div>
  );
};

export default AboutHome;
