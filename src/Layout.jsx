import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

const Layout = () => {

  

  return (
    <>
        <div className="whole_wrapper p-3">
            <div className="top_div w-[100%] sticky top-0 z-50 ">
                <div className="top_sub_div_1 flex flex-row justify-between items-center bg-black px-6 py-3 rounded-md">
                    <p className='text-3xl text-white light:text-black light:font-bold font-sans'>Sandeep Varma Mantena</p>
                    <div className="socilal_links flex flex-row justify-between items-center w-[14%]">
                        <a href="https://www.linkedin.com/in/sandeepvarmamantena/">
                            <SlSocialLinkedin className='text-white text-xl font-semibold'/>
                        </a>
                        <a href="https://www.linkedin.com/in/sandeepvarmamantena/">
                            <VscGithubAlt className='text-white text-xl font-semibold'/>
                        </a><a href="https://www.linkedin.com/in/sandeepvarmamantena/">
                            <RiTwitterXLine className='text-white text-xl font-semibold'/>
                        </a><a href="https://www.linkedin.com/in/sandeepvarmamantena/">
                            <FaInstagram className='text-white text-xl font-semibold'/>
                        </a>
                    </div>
                </div>
                <div className="top_sub_div_2">
                    <div className="menu_wrapper flex flex-row justify-between items-center px-6 py-3 rounded-md">
                        <a href=""><p className='menu_item text-black text-xl font-semibold font-serif'>Home</p></a>
                        <a href=""><p className='menu_item text-black text-xl font-semibold font-serif'>About</p></a>
                        <a href=""><p className='menu_item text-black text-xl font-semibold font-serif'>Projects</p></a>
                        <a href=""><p className='menu_item text-black text-xl font-semibold font-serif'>Contact</p></a>
                        <a href=""><p className='menu_item text-black text-xl font-semibold font-serif'>Resume</p></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout
