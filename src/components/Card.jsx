import React from 'react'
import { motion } from 'framer-motion'

const Card = (props) => {
  return (
    <>
        <div className="card_outer_div border-2 border-[#0AFE92] hover:bg-[#0AFE92] hover:text-black rounded-md cursor-pointer p-2 shadow-4xl w-[20%] h-[65%]">
            <div className="card_inner_div flex flex-col justify-center items-center gap-4">
                <p className='text-lg font-normal font-sans text-center'>{props.title}</p>
                <p className='text-xl font-normal font-serif'>
                    <ol className='list-disc list-outside '>
                        <motion.li>
                            {props.description}
                        </motion.li>
                    </ol>
                </p>
                <div className="card_buttons flex flex-row justify-center items-center gap-4 mb-auto">
                    <a href={props.live} target='blank' className='text-xl font-semibold font-serif bg-[#0AFE92] text-black px-6 py-2 rounded-md cursor-pointer hover:bg-black hover:text-[#0AFE92] border-2 border-black'>Live</a>
                    <a href={props.repo} target='blank' className='text-xl font-semibold font-serif bg-[#0AFE92] text-black px-4 py-2 rounded-md cursor-pointer hover:bg-black hover:text-[#0AFE92] border-2 border-black '>Repo</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
