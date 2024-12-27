import React from 'react'
import aboutImg from '../assets/profile_img.jpg'
import { motion } from 'framer-motion'    // import framer-motion
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiReduxsaga } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaJoomla } from "react-icons/fa";


const About = () => {

    const parentVariant = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }

    const childVariant = {
        hidden: {
            opacity: 0,
            y: 20,
            x: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0
        }
    }


  return (
    <>
        <div className='about_wrapper flex w-[100%] h-[100%] justify-between items-center p-6 '>
             <div className="main_content_div w-[70%] h-[100%] flex flex-col items-start gap-6 p-6 justify-center">
                  <motion.p 
                    className='text-4xl font-semibold font-serif'
                    variants={parentVariant}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    About <span className='font-medium font-sans text-[#0AFE92]'>Me</span></motion.p>
                  <ol 
                    className='list-[disc] list-outside flex flex-col gap-4 pl-6'
                  >
                    <motion.li 
                      className='text-2xl font-light font-serif tracking-wide text-[#0AFE92]'
                      variants={childVariant}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      I am Sandeep Varma Mantena, Highly motivated and results-oriented final-year Bachelor of Technology in AI & DS with a strong foundation in computer science and a proven ability to build dynamic web applications using React, JavaScript, and modern front-end technologies.</motion.li>
                    <motion.li 
                      className='text-2xl font-light font-serif tracking-wide'
                      variants={childVariant}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Demonstrated exceptional problem-solving and teamwork skills by leading the development of a blockchain solution that secured 1st place in an India-level hackathon, showcasing a strong ability to collaborate effectively and achieve outstanding results.</motion.li>
                    <motion.li 
                      className='text-2xl font-light font-serif tracking-wide text-[#0AFE92]'
                      variants={childVariant}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      Eager to contribute to a challenging role as a Frontend Developer and contribute to innovative projects within a dynamic team environment, leveraging my technical skills and passion for technology to drive impactful solutions.</motion.li>
                  </ol>
             </div>
             <div className="img_content_div w-[30%] h-[100%] flex items-center flex-col flex justify-center gap-4 drop-shadow-2xl bg-[#0AFE92]  rounded-md py-6 px-3">
                  <motion.img 
                    src={aboutImg} 
                    alt="profile" 
                    className='w-[200px] h-[200px] rounded-full shadow-2xl'
                    variants={{initial: {scale: .7}, animate: {scale: 1}}}
                    initial='initial'
                    animate='animate'
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <div className="personal_info flex flex-col justify-center items-start gap-2 text-black">
                      <p className='text-xl font-medium font-serif'><span className='font-medium text-lg font-sans'>Full Name :</span> Mantena Sandeep Varma</p>
                      <p className='text-xl font-medium font-serif'><span className='font-medium text-lg font-sans'>Email :</span> <a href='mailto:manthenasandeepvarma766@gmail.com' >manthenasandeepvarma766@gmail.com</a></p>
                      <p className='text-xl font-medium font-serif'><span className='font-medium text-lg font-sans'>Phone :</span> <a href='tel:+919494220881'>+91 9494220881</a></p>
                      <p className='text-xl font-medium font-serif'><span className='font-medium text-lg font-sans'>Location :</span> Vijayawada, Andhra Pradesh.</p> 
                  </div>
             </div>
        </div>
        <div className="tech_stack_div py-4">
            <div className="tech_stack_wrapper flex flex-col justify-center items-center p-6 ">
                <p className='text-4xl font-semibold font-serif tracking-wide'>TECH StacK</p>
                <div className="top_stack flex flex-row justify-between items-center gap-6 w-[100%] py-6 x-4">
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center'><FaHtml5 /> <span className='text-sm font-serif tracking-wider'>HTML</span></p>
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center'><FaCss3Alt /> <span className='text-sm font-serif tracking-wider'>CSS</span></p>
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center'><TbBrandJavascript /> <span className='text-sm font-serif tracking-wider'>JS</span></p>
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center'><FaBootstrap /> <span className='text-sm font-serif tracking-wider'>Bootstrap</span></p>
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center'><RiTailwindCssFill /> <span className='text-sm font-serif tracking-wider'>Tailwind</span></p>
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center'><FaReact className='animate-spin-slow'/> <span className='text-sm font-serif tracking-wider'>React</span></p>
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center'><SiRedux /> <span className='text-sm font-serif tracking-wider'>Redux</span></p>
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center'><SiAxios /> <span className='text-sm font-serif tracking-wider'>Axios</span></p>
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center'><SiReduxsaga /> <span className='text-sm font-serif tracking-wider'>Saga</span></p>
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center'><TbBrandFramerMotion /> <span className='text-sm font-serif tracking-wider'>Motion</span></p>
                    <p className='px-4 py-2 border-b-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg flex flex-col items-center '><FaJoomla /> <span className='text-sm font-serif tracking-wider'>Joomla</span></p>
                </div>
                {/* <div className="bottom_stack flex flex-row justify-around items-center gap-4 w-[90%] p-4 animate-scroll">
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg'><FaHtml5 /></p>
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg'><FaCss3Alt /></p>
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg'><TbBrandJavascript /></p>
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg'><FaBootstrap /></p>
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg'><RiTailwindCssFill /></p>
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg'><FaReact className='animate-spin'/></p>
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg'><SiRedux /></p>
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg'><SiAxios /></p>
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg'><SiReduxsaga /></p>
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg'><TbBrandFramerMotion /></p>
                    <p className='p-3 border-2 text-4xl text-[#0AFE92] border-[#0AFE92] rounded-lg '><FaJoomla /></p>
                </div> */}
            </div>
        </div>
        
        
    </>
  )
}

export default About
