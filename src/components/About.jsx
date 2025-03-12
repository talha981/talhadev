
import { useEffect } from "react";
import { User, GraduationCap } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to the top of the page when the About component loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col px-4 sm:px-10 md:px-20  items-start">
<div className="flex  items-center mt-40  mb-8">
        <User className="mr-3 text-blue-500" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold border-b-2   border-blue-500 pb-2">About Me</h1>
      </div>       <p className="text-md  text-justify leading-relaxed">
        Full Stack Developer with over 4 years of experience building dynamic web and mobile applications using 
        <span className="text-blue-500 font-semibold"> React, React Native,</span> and <span className="text-blue-500 font-semibold">Android</span>. 
        Skilled in creating user-friendly interfaces, developing robust backends, and ensuring seamless performance. 
        Passionate about solving complex problems and delivering high-quality solutions. Seeking an opportunity to 
        apply my expertise, contribute to impactful projects, and grow professionally in a collaborative environment.
      </p>
    </div>
  );
};

export default About;
