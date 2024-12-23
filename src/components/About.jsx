import React from 'react'
import aboutImg from '../assets/profile_img.jpg'
import { motion } from 'framer-motion'    // import framer-motion

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
        <div className='about_wrapper flex w-[100%] h-[100%] justify-between items-center p-6'>
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
                      className='text-xl font-normal font-serif tracking-wide'
                      variants={childVariant}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <span className='font-medium text-sm font-sans text-[#0AFE92]'>I am Sandeep Varma Mantena,</span> a Frontend Developer with 3 years of experience in building responsive websites and web applications. I specialize in React, JavaScript, and CSS. I am passionate about building scalable and maintainable web applications. I am a quick learner and always eager to learn new technologies.</motion.li>
                    <motion.li 
                      className='text-xl font-normal font-serif tracking-wide'
                      variants={childVariant}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      I have a Bachelor's degree in Computer Science and Engineering from Vignan's Institute of Information Technology, Visakhapatnam, India. I have worked with various startups and companies to build web applications. I have experience in working with RESTful APIs, GraphQL, and Firebase.</motion.li>
                    <motion.li 
                      className='text-xl font-normal font-serif tracking-wide'
                      variants={childVariant}
                      initial='hidden'
                      animate='visible'
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      I am currently looking for new opportunities to work as a <span className='font-medium font-sans text-sm text-[#0AFE92]'>Frontend Developer</span>. If you have any opportunities, please feel free to contact me.</motion.li>
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
        
    </>
  )
}

export default About
