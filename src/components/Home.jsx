import React from 'react'
import profileImg from '../assets/sandeep_varma_copy.jpg'

const Home = () => {
  return (
    <>
        <div className='home_wrapper flex flex-col justify-center items-center w-[100%] gap-4'>
            <img src={profileImg} alt="profile" className='w-[290px] h-[300px] rounded-full animate-pulse'/>
            <p className='text-4xl font-semibold font-serif'>I am Sandeep Varma Mantena</p>
            <p className='text-3xl font-medium font-serif bg-white text-black w-[100%] text-center rounded-md'>A Frontend Developer</p>
        </div>
    </>
  )
}

export default Home
