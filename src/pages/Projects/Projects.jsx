import React from 'react'
import Profile from '../../img/work-profile.png'
import { AiFillGithub } from 'react-icons/ai'
import { BsLaptop } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import NFT from '../../img/nft-market.png'
import ECommerce from '../../img/e-commerce.png'

const Projects = () => {
  return (
    <div className='MyWord mt-10'>
      <div className='text-center mb-5'>
        <label className='text-oranger font-medium text-base'>CHECK OUT MY REACT PROJECTS</label>
        <h1 className='lg:text-4xl font-bold mt-3 text-2xl'>My Work</h1>
      </div>
      <div className='lg:grid grid-cols-3 gap-4 w-10/12 mx-auto'>
        <div className='bg-white rounded-md p-5 mb-3'>
          <img src={Profile} className='mb-2 h-52'></img>
          <label className='text-oranger font-medium text-xs'>REACT | TAILWIND</label>
          <h1 className='lg:text-2xl font-bold text-xl'>React Profile</h1>
          <div className='flex justify-between mt-3'>
            <Link to='https://profile-zeta-ruby.vercel.app/'>
              <div className='flex'>
                <BsLaptop />
                <label className='text-xs ml-3'>LIVE DEMO</label>
              </div>
            </Link>
            <Link to='https://github.com/hoangtu0508/Profile'>
              <div className='flex'>
                <AiFillGithub />
                <label className='text-xs ml-3'>SOURCE CODE</label>
              </div>
            </Link>

          </div>
        </div>
        <div className='bg-white rounded-md p-5 mb-3'>
          <img src={NFT} className='mb-2 h-52'></img>
          <label className='text-oranger font-medium text-xs'>NEXT | CSS | SOLIDITY</label>
          <h1 className='lg:text-2xl font-bold text-xl'>NFT Marketplace</h1>
          <div className='flex justify-between mt-3'>
            <Link to='https://fontend-marketplace.vercel.app/'>
              <div className='flex items-center'>
                <BsLaptop />
                <label className='text-xs ml-3'>LIVE DEMO</label>
              </div>
            </Link>
            <Link to='https://github.com/hoangtu0508/fontend_marketplace'>
              <div className='flex'>
                <AiFillGithub />
                <label className='text-xs ml-3'>SOURCE CODE</label>
              </div>
            </Link>

          </div>
        </div>
        <div className='bg-white rounded-md p-5 mb-3'>
          <img src={ECommerce} className='mb-2 h-52'></img>
          <label className='text-oranger font-medium text-xs'>REACT | SASS | STRAPI | STRIPE</label>
          <h1 className='lg:text-2xl font-bold text-xl'>E Commerce</h1>
          <div className='flex justify-between mt-3'>
            <Link to='https://e-commerce-47ca.vercel.app/'>
            <div className='flex'>
              <BsLaptop />
              <label className='text-xs ml-3'>LIVE DEMO</label>
            </div>            
            </Link>
            <Link to='https://github.com/hoangtu0508/e-commerce'>
            <div className='flex'>
              <AiFillGithub />
              <label className='text-xs ml-3'>SOURCE CODE</label>
            </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects