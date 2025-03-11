import React from 'react';
import { FaBroadcastTower } from 'react-icons/fa';

const ProjectIntro = () => {
  return (
    <div className="flex flex-col px-4 sm:px-10 md:px-20 mb-16">
<div className="flex items-center mt-40  mb-8">
        <FaBroadcastTower className="mr-3 text-blue-500" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-blue-500 pb-2">Live Project</h1>
      </div>      <p className="text-md  text-justify leading-relaxed">
        Here you will find some of the projects I have worked on that are live and available for use. 
        These projects span various domains, including luxury travel services, AI-powered text analysis, and 
        high-performance email servers. Each project showcases my expertise in different technologies such as Next.js, 
        Tailwind CSS, spaCy.io, and Node.js. Feel free to explore these projects and check out their live versions.
      </p>
    </div>
  );
};

export default ProjectIntro;
