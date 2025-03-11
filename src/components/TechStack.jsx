import { motion } from 'framer-motion';
import { 
    FaReact, FaNodeJs, FaBootstrap, FaJava, FaPython, FaDatabase 
} from 'react-icons/fa';
import { 
    SiJavascript, SiNextdotjs, SiTypescript, SiMongodb, SiMongoose, 
    SiTailwindcss, SiMui, SiCplusplus, SiPostgresql, SiMysql, 
    SiNumpy, SiSpacy 
} from 'react-icons/si';
import { FaTools } from "react-icons/fa";

const techStack = [
    { id: 1, icon: <SiJavascript />, name: "JavaScript" },
    { id: 2, icon: <FaReact />, name: "React.js" },
    { id: 3, icon: <SiNextdotjs />, name: "Next.js" },
    { id: 4, icon: <SiTypescript />, name: "TypeScript" },
    { id: 5, icon: <FaBootstrap />, name: "Bootstrap" },
    { id: 6, icon: <SiMui />, name: "Material UI" },
    { id: 7, icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { id: 8, icon: <FaNodeJs />, name: "Node.js" },
    { id: 9, icon: <SiMongoose />, name: "Mongoose" },
    { id: 10, icon: <SiMongodb />, name: "MongoDB" },
    { id: 11, icon: <FaJava />, name: "Java" },
    { id: 12, icon: <SiCplusplus />, name: "C/C++" },
    { id: 13, icon: <SiPostgresql />, name: "PostgreSQL" },
    { id: 14, icon: <FaDatabase />, name: "pgAdmin" },
    { id: 15, icon: <SiMysql />, name: "MySQL" },
    { id: 16, icon: <FaPython />, name: "Python" },
    { id: 17, icon: <SiSpacy />, name: "spaCy.io" },
    { id: 18, icon: <SiNumpy />, name: "NumPy" },
];

const TechStackGrid = () => {
    return (
        <div className="flex flex-col px-4 mb-24 sm:px-10 md:px-20 ">
            <div className="flex mt-16 items-center mb-8">
                <FaTools className="mr-3 text-blue-500" size={32} />
                <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-blue-500 pb-2">Tech Stack</h1>
            </div>
            <div className="grid   p-2 grid-cols-3 gap-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6">
                {techStack.map((tech, index) => (
                    <motion.div 
                        key={index} 
                        className="flex flex-col items-center text-3xl  rounded-lg transition-transform transform hover:scale-110"
                        whileHover={{ scale: 1.2 }}
                    >
                        {tech.icon}
                        <span className="text-sm mt-2">{tech.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechStackGrid;
