import React from 'react'
import bg from '../../img/bg-header.png'
import Button from '../Button/Button'
import { AiFillGithub, AiOutlineInstagram, AiOutlineSkype } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'

const Intro = () => {
  return (
    <div className='xl:flex w-10/12 m-auto pt-20 xl:pb-16'>
      <div className='xl:w-1/2 xl:pr-10'>
        <label className='text-oranger font-medium text-base'>FRONTEND DEVELOPER</label>
        <h1 className='xl:text-5xl font-bold mt-6 text-3xl'>Hey! I Am</h1>
        <h1 className='xl:text-6xl font-bold mt-6 text-oranger text-4xl'>TRUONG HOANG TU</h1>
        <p className='mt-6 text-1xl'>I have a passion for programming and am developing a frontend interface for a web application.</p>
        <div className='w-48'>
          <Button name='HERE ME' to='go' />
        </div>
        <p className='mt-6'>Follow Me:</p>
        <div className='flex mt-6'>
          <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><AiOutlineSkype className='w-5 h-5' /></span>
          <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><CiFacebook className='w-5 h-5' /></span>
          <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><AiOutlineInstagram className='w-5 h-5' /></span>
          <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><AiFillGithub className='w-5 h-5' /></span>
        </div>
      </div>
      <div className='xl:w-1/2'>
        <img src={bg} className='w-11/12 '></img>
      </div>
    </div>
  )
}

export default Intro