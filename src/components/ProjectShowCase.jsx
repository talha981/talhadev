import React, { useState } from 'react';
import { MdEmail, MdLocationOn, MdPhone, MdClose, MdCheckCircle } from 'react-icons/md';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 shadow-xl z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center text-green-500">
                  <MdCheckCircle size={28} className="mr-2" />
                  <h3 className="text-xl font-bold">Success!</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <MdClose size={22} />
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-300 mb-3">
                  Thank you for reaching out! Your message has been sent successfully.
                </p>
                <p className="text-gray-400">
                  I'll get back to you as soon as possible.
                </p>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: (values, { resetForm }) => {
      // Show the success modal
      setShowModal(true);
      console.log('Form submitted:', values);
      resetForm();
    }
  });

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="px-4 py-16 sm:px-4 md:px-20 lg:px-20">
      <div className="flex mt-16 items-center mb-8">
        <MdEmail className="mr-3 text-blue-500" size={32} />
        <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-blue-500 pb-2">Get In Touch</h1>
      </div>
      <p className="mb-10 text-justify leading-relaxed">Feel free to reach out for collaborations or any inquiries. I’m always open to discussing exciting projects and new ideas.

If you have any questions or just want to connect, don’t hesitate to get in touch. I’d love to hear from you!</p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
        <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
    <div className="bg-blue-500 p-3 rounded-full">
      <MdEmail className="text-white" size={24} />
    </div>
    <div>
      <h3 className="font-semibold">Email</h3>
      <a href="mailto:safdartalha69@fmail.com" className="text-gray-400 hover:underline">
        safdartalha69@fmail.com
      </a>
    </div>
  </motion.div>

  <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
    <div className="bg-blue-500 p-3 rounded-full">
      <MdPhone className="text-white" size={24} />
    </div>
    <div>
      <h3 className="font-semibold">Phone</h3>
      <a href="tel:+92XXXXXX" className="text-gray-400 hover:underline">
        +92 XXX XXX XXX
      </a>
    </div>
  </motion.div>

  <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
    <div className="bg-blue-500 p-3 rounded-full">
      <MdLocationOn className="text-white" size={24} />
    </div>
    <div>
      <h3 className="font-semibold">Location</h3>
      <a
        href="https://www.google.com/maps?q=Rawalpindi,Pakistan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:underline"
      >
        Rawalpindi, Pakistan
      </a>
    </div>
  </motion.div>
          <div>
  <h3 className="mt-14 font-semibold">Follow Me</h3>
  <div className="flex space-x-4 mt-3">
    <a
      href="https://www.instagram.com/tal_hahaha22/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 transition-all"
    >
      <FaInstagram size={20} className="text-white" />
    </a>
    <a
      href="https://www.facebook.com/betting.chudharytalha/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all"
    >
      <FaFacebook size={20} className="text-white" />
    </a>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-all"
    >
      <FaTwitter size={20} className="text-white" />
    </a>
  </div>
</div>

        </div>

        <motion.div 
          className="rounded-lg shadow-lg" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
        >
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input 
                type="text" 
                name="name" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                value={formik.values.name} 
                className="w-full px-4 py-2 text-black bg-gray-50 border border-blue-500 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              ) : null}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input 
                type="email" 
                name="email" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                value={formik.values.email} 
                className="w-full px-4 py-2 text-black bg-gray-50 border border-blue-500 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              ) : null}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea 
                name="message" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                value={formik.values.message} 
                rows="2" 
                className="w-full text-black px-4 py-2 bg-gray-50 border border-blue-500 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              ) : null}
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success Modal */}
      <SuccessModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
};

export default ContactSection;