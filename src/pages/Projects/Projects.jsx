import React from 'react'
import Profile from '../../img/work-profile.png'
import {AiFillGithub} from 'react-icons/ai'
import {BsLaptop} from 'react-icons/bs'

const Projects = () => {
  return (
    <div className='MyWord mt-10'>
      <div className='text-center mb-5'>
        <label className='text-oranger font-medium text-base'>CHECK OUT MY REACT PROJECTS</label>
        <h1 className='lg:text-4xl font-bold mt-3 text-2xl'>My Work</h1>
      </div>
      <div className='lg:grid grid-cols-3 gap-4 w-10/12 mx-auto'>
        <div className='bg-white rounded-md p-5 mb-3'>
          <img src={Profile} className='mb-2'></img>
          <label className='text-oranger font-medium text-xs'>REACT | TAILWIND</label>
          <h1 className='lg:text-2xl font-bold text-xl'>React Profile</h1>
          <div className='flex justify-between mt-3'>
            <div className='flex'>
              <span><BsLaptop/></span>
              <label className='text-xs ml-3'>LIVE DEMO</label>
            </div>
            <div className='flex'>
              <span><AiFillGithub /></span>
              <label className='text-xs ml-3'>SOURCE CODE</label>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md p-5 mb-3'>
          <img src={Profile} className='mb-2'></img>
          <label className='text-oranger font-medium text-xs'>REACT | TAILWIND</label>
          <h1 className='lg:text-2xl font-bold text-xl'>React Profile</h1>
          <div className='flex justify-between mt-3'>
            <div className='flex'>
              <span><BsLaptop/></span>
              <label className='text-xs ml-3'>LIVE DEMO</label>
            </div>
            <div className='flex'>
              <span><AiFillGithub /></span>
              <label className='text-xs ml-3'>SOURCE CODE</label>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md p-5 mb-3'>
          <img src={Profile} className='mb-2'></img>
          <label className='text-oranger font-medium text-xs'>REACT | TAILWIND</label>
          <h1 className='lg:text-2xl font-bold text-xl'>React Profile</h1>
          <div className='flex justify-between mt-3'>
            <div className='flex'>
              <span><BsLaptop/></span>
              <label className='text-xs ml-3'>LIVE DEMO</label>
            </div>
            <div className='flex'>
              <span><AiFillGithub /></span>
              <label className='text-xs ml-3'>SOURCE CODE</label>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Projects