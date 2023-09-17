import React from 'react'
import about from '../../img/about.svg'
import Button from '../../component/Button/Button'

const About = () => {
  return (
    <div className='About lg:flex w-10/12 m-auto pt-10'>
      <div className='lg:w-1/2'>
        <img src={about} className='lg:w-11/12'></img>
      </div>
      <div className='lg:w-1/2'>
        <label className='text-oranger font-medium text-base'>ABOUT</label>
        <h1 className='lg:text-4xl font-bold mt-6 text-3xl'>Hi! I Am Tu</h1>
        <p className='mt-6 xl:text-1xl'>I was born in 2001 and I live in Quy Nhon City, more precisely in Tuy Phuoc district, Binh Dinh province. But I don't want to make this Introduction boring so I'll tell you a little about me.</p>
        <p className='mt-6 xl:text-1xl'>I am an engineering graduate with background in web design and development. Worked 3 months at TMA Solutions and got an internship certificate. Looking to become the next front end developer.</p>
        <div className='lg:w-1/3 w-1/2'>
          <Button name={'DOWNLOAD CV'} to='https://drive.google.com/drive/folders/1fdAIAGEjgIdMh5J6ynsQp_Mn7IG1uoIk?usp=sharing'></Button>
        </div>
      </div>
    </div>
  )
}

export default About