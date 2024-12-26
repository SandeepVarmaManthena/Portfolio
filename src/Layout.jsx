import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

const Layout = () => {

    const [renderItem, setRenderItem] = React.useState('home');

    const handleMenuClick = (item) => {
        setRenderItem(item);
    }



  return (
    <>
        <div className="whole_wrapper px-2 py-1 bg-[#F8FAFC] w-[100%] flex flex-col justify-center items-center h-[100vh] overflow-hidden">
            <div className="top_div w-[100%] sticky top-2 z-50 ">
                <div className="top_sub_div_1 flex flex-row justify-between items-center bg-black px-6 py-4 rounded-md drop-shadow-lg">
                    <p className='text-xl text-white light:text-black font-sans '><span className='text-[#0AFE92] font-semibold'>Hello,</span> Welcome To My Portfolio.</p>
                    <div className="socilal_links flex flex-row justify-between items-center w-[14%]">
                        <a href="https://www.linkedin.com/in/sandeepvarmamantena/">
                            <SlSocialLinkedin className='text-white text-2xl font-bold'/>
                        </a>
                        <a href="https://www.linkedin.com/in/sandeepvarmamantena/" className='text-white text-2xl font-bold'>
                            <VscGithubAlt className='text-white text-2xl font-bold'/>
                        </a><a href="https://www.linkedin.com/in/sandeepvarmamantena/">
                            <RiTwitterXLine className='text-white text-2xl font-bold'/>
                        </a><a href="https://www.linkedin.com/in/sandeepvarmamantena/">
                            <FaInstagram className='text-white text-2xl font-bold'/>
                        </a>
                    </div>
                </div>
                <div className="top_sub_div_2">
                    <div className="menu_wrapper bg-[#F8FAFC] flex flex-row justify-between items-center px-0 pt-3 transition-all">
                        <motion.a  
                            className={`${renderItem === 'home' ? 'w-[50%] text-center cursor-pointer font-sans active delay-300' : 'cursor-pointer '}`} 
                            onClick={() => handleMenuClick('home')}
                            transition={{duration: 0.5, delay: 0.3}}>
                            <p className={`${renderItem === 'home' ? 'text-white bg-black px-6 py-3 rounded-tr-md rounded-tl-md font-sans' : 'font-serif'} menu_item text-black text-2xl px-6 py-3 font-semibold `}>HOME</p>
                        </motion.a>
                        <motion.a  
                            variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
                            initial='hidden'
                            animate='visible'
                            className={`${renderItem === 'about' ? 'w-[50%] text-center cursor-pointer font-sans active delay-300' : 'cursor-pointer '}`} 
                            onClick={() => handleMenuClick('about')}
                            transition={{duration: 0.5, delay: 0.3}}>
                            <p className={`${renderItem === 'about' ? 'text-white bg-black px-6 py-3 rounded-tr-md rounded-tl-md font-sans' : 'font-serif'} menu_item text-black text-2xl px-6 py-3 font-semibold `}>ABOUT</p>
                        </motion.a>
                        <motion.a  
                            variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
                            initial='hidden'
                            animate='visible'
                            className={`${renderItem === 'projects' ? 'w-[50%] text-center cursor-pointer font-sans active delay-300' : 'cursor-pointer '}`} 
                            onClick={() => handleMenuClick('projects')}
                            transition={{duration: 0.5, delay: 0.3}}>
                            <p className={`${renderItem === 'projects' ? 'text-white bg-black px-6 py-3 rounded-tr-md rounded-tl-md font-sans' : 'font-serif'} menu_item text-black text-2xl px-6 py-3 font-semibold `}>PROJECTS</p>
                        </motion.a>
                        <motion.a  
                            variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
                            initial='hidden'
                            animate='visible'
                            className={`${renderItem === 'contact' ? 'w-[50%] text-center cursor-pointer font-sans active delay-300' : 'cursor-pointer '}`} 
                            onClick={() => handleMenuClick('contact')}
                            transition={{duration: 0.5, delay: 0.3}}>
                            <p className={`${renderItem === 'contact' ? 'text-white bg-black px-6 py-3 rounded-tr-md rounded-tl-md font-sans' : 'font-serif'} menu_item text-black text-2xl px-6 py-3 font-semibold `}>CONTACT</p>
                        </motion.a>
                        <a href='/SandeepVarma_Resume.pdf' className='relative cursor-pointer' download={'sandeep_resume.pdf'} type='application/pdf'><p className='menu_item text-[blue] text-2xl px-6 py-3 font-semibold font-serif'>RESUME  <span class="absolute inline-flex top-1 rounded-full h-6 w-6 shadow-3xl animate-bounce text-[blue]"><MdOutlineDownloadForOffline /></span>
                        </p></a>
                    </div>
                </div>
            </div>
            <div className="bottom_wrpper bg-black p-3 w-[100%] h-[100%] text-white light:text-black light:bg-white rounded-br-md rounded-bl-md flex flex-col justify-center items-center overflow-y-scroll">
                {renderItem === 'home' && <Home />}
                {renderItem === 'about' && <About />}
                {renderItem === 'projects' && <Projects />}
                {renderItem === 'contact' && <Contact />}
            </div>
            
        </div>
    </>
  )
}

export default Layout
