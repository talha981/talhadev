import React, { useState } from 'react';
import { ChevronRight, Award, Calendar, Briefcase } from 'lucide-react';

const Internships = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const internshipData = [
    {
      company: "Parliament House Islamabad",
      role: "Full-Stack Developer",
      technologies: ["React.js", "Node.js", "PostgreSQL"],
      period: "10 July 2024 - Present",
      details: "Working on developing and maintaining web applications for internal government use.",
      achievements: [
        "Developed an internal dashboard for real-time data monitoring.",
        "Integrated secure authentication and role-based access control.",
        "Optimized API performance and database queries."
      ],
    },
    {
      company: "Attock Refinery Limited Rawalpindi",
      role: "Front-End Developer",
      technologies: ["React.js", "Next.js"],
      period: "10 June 2024 - 6 July 2024",
      details: "Contributed to the development of a web portal for refining operations and management.",
      achievements: [
        "Enhanced UI/UX for better user engagement.",
        "Implemented server-side rendering for improved performance.",
        "Worked closely with backend engineers to optimize API calls."
      ],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col mb-24  px-4 sm:px-10 md:px-20 mt-16">
      <div className="flex items-center mb-8">
        <Briefcase className="mr-3 text-blue-500" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-blue-500 pb-2">Internships</h1>
      </div>
      
      <p className="text-md text-justify leading-relaxed mb-8">
        My internships have provided hands-on experience in full-stack and front-end development, allowing me to apply my technical knowledge in real-world projects.
      </p>
      
      <div className="space-y-8">
        {internshipData.map((internship, index) => (
          <div
            key={index}
            className={`bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 ${
              expandedIndex === index ? 'shadow-xl' : 'shadow-md hover:shadow-lg'
            }`}
          >
            <div 
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800">{internship.company}</h2>
                <div className="flex items-center mt-2">
                  <p className="text-lg font-medium text-gray-700">{internship.role}</p>
                </div>
                <div className="flex items-center mt-1">
                  <Calendar className="mr-2 text-blue-500" size={18} />
                  <p className="text-lg text-gray-600">{internship.period}</p>
                </div>
              </div>
              
              <div className="flex items-center mt-4 md:mt-0">
                <ChevronRight className={`text-blue-500 transition-transform ${
                  expandedIndex === index ? 'rotate-90' : ''
                }`} />
              </div>
            </div>
            
            {expandedIndex === index && (
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold text-blue-600 mt-4 mb-2">Key Achievements</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {internship.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center w-full md:w-auto">
                  <Award className="mr-2" size={16} />
                  View Certificate
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;