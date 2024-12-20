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

const Layout = () => {

    const [renderItem, setRenderItem] = React.useState('home');

    const handleMenuClick = (item) => {
        setRenderItem(item);
    }



  return (
    <>
        <div className="whole_wrapper p-3 bg-[#F8FAFC] w-[100%] h-[79vh]">
            <div className="top_div w-[100%] sticky top-1 z-50 ">
                <div className="top_sub_div_1 flex flex-row justify-between items-center bg-black px-6 py-4 rounded-md drop-shadow-lg">
                    <p className='text-xl text-white light:text-black font-sans '><span className='text-[red] font-semibold'>Hello,</span> Welcome To My Portfolio.</p>
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
                        <a  className={`${renderItem === 'home' ? 'w-[100%] text-center cursor-pointer font-sans' : 'cursor-pointer '}`} onClick={() => handleMenuClick('home')}><p className={`${renderItem === 'home' ? 'text-white bg-[#18171C] px-6 py-3 rounded-tr-md rounded-tl-md font-bold font-sans' : 'font-serif'} menu_item text-black text-xl px-6 py-3 font-bold `}>Home</p></a>
                        <a  className={`${renderItem === 'about' ? 'w-[100%] text-center cursor-pointer font-sans' : 'cursor-pointer '}`} onClick={() => handleMenuClick('about')}><p className={`${renderItem === 'about' ? 'text-white bg-[#18171C] px-6 py-3 rounded-tr-md rounded-tl-md font-bold font-sans' : 'font-serif'} menu_item text-black text-xl px-6 py-3 font-bold `}>About</p></a>
                        <a  className={`${renderItem === 'projects' ? 'w-[100%] text-center cursor-pointer font-sans' : 'cursor-pointer '}`} onClick={() => handleMenuClick('projects')}><p className={`${renderItem === 'projects' ? 'text-white bg-[#18171C] px-6 py-3 rounded-tr-md rounded-tl-md font-bold font-sans' : 'font-serif'} menu_item text-black text-xl px-6 py-3 font-bold `}>Projects</p></a>
                        <a  className={`${renderItem === 'contact' ? 'w-[100%] text-center cursor-pointer font-sans' : 'cursor-pointer '}`} onClick={() => handleMenuClick('contact')}><p className={`${renderItem === 'contact' ? 'text-white bg-[#18171C] px-6 py-3 rounded-tr-md rounded-tl-md font-bold font-sans' : 'font-serif'} menu_item text-black text-xl px-6 py-3 font-bold `}>Contact</p></a>
                        <a href='http://localhost:5173/src/assets/SandeepVarma_Resume.pdf' className='relative cursor-pointer' download={'sandeep_resume.pdf'} type='application/pdf'><p className='menu_item text-[blue] text-xl px-6 py-3 font-bold font-serif'>Resume  <span class="absolute inline-flex top-1 rounded-full h-6 w-6 shadow-3xl animate-bounce text-[blue]"><MdOutlineDownloadForOffline /></span>
                        </p></a>
                    </div>
                </div>
            </div>
            <div className="bottom_wrpper bg-[#18171C] p-3 w-[100%] h-[100%] text-white light:text-black light:bg-white rounded-br-md rounded-bl-md flex flex-col justify-center items-center">
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
