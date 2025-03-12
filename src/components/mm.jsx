import React, { useState } from 'react';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div className="flex flex-col px-4 mb-24 sm:px-10 md:px-20">
      <div className="flex mt-16 items-center mb-8">
        <MdEmail className="mr-3 text-blue-500" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-blue-500 pb-2">Get In Touch</h1>
      </div>
      <p className="text-md text-justify leading-relaxed mb-4">
            Feel free to reach out to me for collaboration, job opportunities, or just to say hello! I'm always open to discussing new projects and ideas.
          </p>
      
      <div className="grid md:grid-cols-2 gap-8">



        <div className="flex flex-col space-y-6">
          
          
          <motion.div 
            className="flex items-start space-x-4"
            whileHover={{ x: 5 }}
          >
            <div className="bg-blue-500 p-3 rounded-full">
              <MdEmail className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-400">talha.safdar@example.com</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-start space-x-4"
            whileHover={{ x: 5 }}
          >
            <div className="bg-blue-500 p-3 rounded-full">
              <MdLocationOn className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-gray-400">Rawalpindi, Pakistan</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-start space-x-4"
            whileHover={{ x: 5 }}
          >
            <div className="bg-blue-500 p-3 rounded-full">
              <MdPhone className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-400">+92 123 456 7890</p>
            </div>
          </motion.div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <motion.div 
          className=" rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium"> Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium"> Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
       
            
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium"> Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;