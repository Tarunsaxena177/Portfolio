import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className='min-h-screen flex flex-col justify-center items-center px-6 py-24'>
      <motion.h2 className='text-4xl font-bold mb-8 text-blue-400' initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>About Me</motion.h2>
      <motion.div className='max-w-4xl bg-[rgba(255,255,255,0.05)] p-8 rounded-2xl shadow-lg backdrop-blur-md border border-[rgba(255,255,255,0.1)]' initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <p className='text-gray-300 leading-relaxed text-lg'>
          I’m <span className='text-blue-400 font-semibold'>Tarun Saxena</span>, a passionate <span className='text-blue-400'>Full Stack Developer</span> who enjoys crafting modern, scalable, and interactive web applications.
          With hands-on experience in the <span className='text-blue-400'>MERN stack</span> and API integration, I thrive on solving real-world challenges and creating smooth digital experiences. I have built projects that integrate AI models, handle large-scale data, and deliver optimized performance under heavy load.
        </p>
      </motion.div>
    </section>
  )
}

export default About;
