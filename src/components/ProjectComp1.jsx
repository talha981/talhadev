import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa'; // Import the project diagram icon

const ProjectComp1 = () => {
  const projects = [
    {
      title: "Luxury Travel and Concierge Services",
      description: "Develop a car booking platform using Next.js and Tailwind CSS for the frontend, with an ASP.NET backend to provide seamless luxury car rentals across England.",
      imageUrl: "https://talha981.github.io/talhadev/capture.JPG.jpg",
      websiteUrl: "https://www.luxurytravelltd.com/"
    },
    {
      title: "AI-Powered Analysis",
      description: "Built with spaCy.io for efficient NLP processing, enabling entity recognition, text classification, and more.",
      imageUrl: "https://talha981.github.io/talhadev/capture4.JPG.JPG",
      websiteUrl: "https"
    },
    {
      title: "SMTP Email Server",
      description: "Build an SMTP server in Node.js to send emails with your own email letters. Send 1000+ emails at a time effortlessly.",
      imageUrl: "https://talha981.github.io/talhadev/capture5.JPG.JPG",
      websiteUrl: "https"
    }
  ];

  return (
    <div className="flex flex-col px-4 sm:px-10 mb-24 md:px-20 items-start">
      {/* Heading Section */}
      <div className="flex items-center mb-8">
        <FaProjectDiagram className="mr-3 text-blue-500" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-blue-500 pb-2">Work</h1>
      </div> 

      {/* Responsive Grid for Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 flex flex-col h-full"
          >
            <div className="relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              {project.websiteUrl && project.websiteUrl !== "/" && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300 text-center"
                >
                  View Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComp1;
