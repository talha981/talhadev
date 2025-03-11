import React, { useState } from 'react';
import { ChevronRight, Award, BookOpen, Calendar, GraduationCap } from 'lucide-react';

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const educationData = [
    {
      college: "Askaria College Rawalpindi",
      year: "2019 - 2021",
      details: "Marks: 934 / 1100",
      degree: "ICS (Intermediate in Computer Science)",
      achievements: [
        "Ranked in top 10% of class",
        "Winner of college programming competition",
        "Completed coursework in Data Structures, OOP, and Database Design"
      ],
      skills: ["C++", "Database Design", "Algorithmic Thinking"],
      projects: [
        "Developed a simple calculator application using C++",
        "Created a student management system database"
      ]
    },
    {
      college: "Arid Agriculture University",
      year: "2021 - 2025",
      details: "CGPA: 3.3 / 4",
      degree: "BS Software Engineering",
      achievements: [
        "Dean's List for 3 semesters",
        "Member of university software development club",
        "Participated in national hackathon representing university"
      ],
      skills: ["Java", "React", "Node.js", "Database Management", "Software Design Patterns"],
      projects: [
        "Developed an e-commerce web application with React and Node.js",
        "Created a machine learning model for crop prediction as part of interdisciplinary project",
        "Built a mobile attendance system using React Native"
      ]
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col px-4 sm:px-10 md:px-20 mt-16 ">
      <div className="flex items-center mb-8">
        <GraduationCap className="mr-3 text-blue-500" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-blue-500 pb-2">Education</h1>
      </div>
      
      <p className="text-lg text-justify leading-relaxed mb-8">
        My academic journey has equipped me with both theoretical knowledge and practical skills in software engineering, 
        preparing me to tackle real-world challenges in the tech industry.
      </p>
      
      <div className="space-y-8">
        {educationData.map((edu, index) => (
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
                <h2 className="text-xl font-bold text-gray-800">{edu.college}</h2>
                <div className="flex items-center mt-2">
                  <BookOpen className="mr-2 text-blue-500" size={18} />
                  <p className="text-lg font-medium text-gray-700">{edu.degree}</p>
                </div>
                <div className="flex items-center mt-1">
                  <Award className="mr-2 text-blue-500" size={18} />
                  <p className="text-lg text-gray-600">{edu.details}</p>
                </div>
              </div>
              
              <div className="flex items-center mt-4 md:mt-0">
                <div className="flex items-center bg-blue-100 px-4 py-2 rounded-full mr-4">
                  <Calendar className="mr-2 text-blue-500" size={16} />
                  <span className="font-medium text-blue-500">{edu.year}</span>
                </div>
                <ChevronRight className={`text-blue-500 transition-transform ${
                  expandedIndex === index ? 'rotate-90' : ''
                }`} />
              </div>
            </div>
            
            {expandedIndex === index && (
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Key Achievements</h3>
                    <ul className="list-disc  pl-5 space-y-1 text-gray-700">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-blue-600 mt-4 mb-2">Skills Acquired</h3>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Notable Projects</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {edu.projects.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                    
                    <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center w-full md:w-auto">
                      <Award className="mr-2" size={16} />
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;