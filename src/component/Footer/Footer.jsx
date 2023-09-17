import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiSolidPhoneCall } from 'react-icons/bi'

const Footer = () => {
  return (
    <>
      <footer className='mt-10'>
        <div className="text-center">
          <label className='text-oranger font-medium text-base'>CONTACT</label>
        </div>
        <div className="grid grid-cols-3 w-11/12 mx-auto py-10">
          <div className='m-auto'>
            <div className="flex items-center w-full mb-4">
              <span className='p-6 rounded-full bg-green-100 mr-5'><BiSolidPhoneCall className='text-green-500 w-10 h-10' /></span>
              <div>
                <h1 className='font-medium text-xl'>Call me:</h1>
                <h2 className='text-lg'>0393053290 - 089817743</h2>
              </div>
            </div>
            <div className="flex items-center w-full mb-4">
              <span className='p-6 rounded-full bg-pink-100 mr-5'><AiOutlineMail className='text-pink-500 w-10 h-10' /></span>
              <div>
                <h1 className='font-medium text-xl'>Email:</h1>
                <h2 className='text-lg'>tu337710@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer