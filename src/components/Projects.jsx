import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <>
        <div className='projects_wrapper flex flex-row justify-evenly items-center w-[100%] h-[100%] gap-4 '>
            <Card 
              title='NFT Trajectory Tracker'
              description='Developed a web application to track the lifecycle of NFTs from creation, transfer, reconfig and till present.'
              live='https://www.google.com'
              repo='https://www.google.com'
            />
            <Card 
              title='BioCredit'
              description='This is a project'
              live='https://www.google.com'
              repo='https://www.google.com'
            />
            <Card 
              title='NFTfiers'
              description='This is a project'
              live='https://www.google.com'
              repo='https://www.google.com'
            />
            <Card 
              title='Placement Management System'
              description='This is a project'
              live='https://www.google.com'
              repo='https://www.google.com'
            />
        </div>
    </>
  )
}

export default Projects
