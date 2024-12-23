import React from 'react'
import profileImg from '../assets/sandeep_varma_copy.jpg'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
        <div 
        className='home_wrapper flex flex-col  items-center w-[100%] gap-4 h-[100%] p-6'
        >
            <motion.img 
              src={profileImg} 
              alt="profile" 
              className='w-[290px] h-[300px] z-10 rounded-full animate-pulse relative'
              variants={
                {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                }
              }
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.4, delay: 0.3 }}
            />
            <p className='text-4xl font-semibold font-serif z-10 relative'>I am Sandeep Varma Mantena</p>
            <motion.p 
              className='text-3xl font-medium font-serif bg-[#0AFE92] text-black w-[100%] text-center rounded-md relative z-10'
              variants={
                {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                }
              }
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A Frontend Developer
              {/* <div className="horizontaline bg-[#0AFE92] w-[20%] h-[75%] rounded-md absolute animate-spin top-0 z-[-1] left-[40%] right-[40%]">
              </div> */}
              </motion.p>
        </div>
    </>
  )
}

export default Home
