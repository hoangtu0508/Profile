import React from 'react'
import bg from '../../img/bg-header.png'
import Button from '../Button/Button'
import { AiFillGithub, AiOutlineInstagram, AiOutlineSkype } from 'react-icons/ai'
import { CiFacebook } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const Intro = () => {
 
  return (
    <div className='lg:flex w-10/12 m-auto pt-20 lg:pb-16'>
      <div className='lg:w-1/2 lg:pr-10'>
        <label className='text-oranger font-medium text-base'>FRONTEND DEVELOPER</label>
        <h1 className='lg:text-5xl font-bold mt-6 text-3xl'>Hey! I Am</h1>
        <h1 className='lg:text-6xl font-bold mt-6 text-oranger text-4xl'>TRUONG HOANG TU</h1>
        <p className='mt-6 text-1xl'>I have a passion for programming and am developing a frontend interface for a web application.</p>
        <div className='w-48'>
          <Button name='HERE ME'/>
        </div>
        <p className='mt-6'>Follow Me:</p>
        <div className='flex mt-6'>
          <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><Link to='https://join.skype.com/invite/pOJ0zmLen8Dl'><AiOutlineSkype className='w-6 h-6' /></Link></span>
          <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><Link to="https://www.facebook.com/profile.php?id=100024612949099"><CiFacebook className='w-6 h-6' /></Link></span>
          <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><Link to='https://www.instagram.com/tu_bino/'><AiOutlineInstagram className='w-6 h-6' /></Link></span>
          <span className='p-1.5 rounded-3xl border-2 bg-gray-200 mr-3'><Link to='https://github.com/hoangtu0508'><AiFillGithub className='w-6 h-6 m-auto' /></Link></span>
        </div>
      </div>
      <div className='lg:w-1/2'>
        <img src={bg} className='lg:w-11/12'></img>
      </div>
    </div>
  )
}

export default Intro