import React from 'react'
import aboutImg from '../assets/profile_img.jpg'

const About = () => {
  return (
    <>
        <div className='about_wrapper flex w-[100%] h-[100%] justify-between items-center'>
            {/* <img src={aboutImg} alt="profile" className='w-[300px] h-[300px] rounded-full '/> */}
             <div className="main_content_div w-[70%] h-[100%] flex flex-col items-start gap-6 p-6">
                  <p className='text-4xl font-semibold font-serif'>About Me</p>
                  <ol className='list-[disc] list-outside flex flex-col gap-4 pl-6'>
                    <li className='text-xl font-normal font-serif tracking-wide'>I am Sandeep Varma Mantena, a Frontend Developer with 3 years of experience in building responsive websites and web applications. I specialize in React, JavaScript, and CSS. I am passionate about building scalable and maintainable web applications. I am a quick learner and always eager to learn new technologies.</li>
                    <li className='text-xl font-normal font-serif tracking-wide'>I have a Bachelor's degree in Computer Science and Engineering from Vignan's Institute of Information Technology, Visakhapatnam, India. I have worked with various startups and companies to build web applications. I have experience in working with RESTful APIs, GraphQL, and Firebase.</li>
                    <li className='text-xl font-normal font-serif tracking-wide'>I am currently looking for new opportunities to work as a Frontend Developer. If you have any opportunities, please feel free to contact me.</li>
                  </ol>
             </div>
             <div className="img_content_div w-[30%] h-[100%] flex items-center flex-col flex">
                  <img src={aboutImg} alt="profile" className='w-[300px] h-[300px] rounded-full '/>
                  <div className="personal_info flex flex-col justify-center items-start gap-2">
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
