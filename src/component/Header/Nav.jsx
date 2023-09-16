import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { selectComponent } from '../../features/header/headerSlice';

const Nav = () => {
    const dispatch = useDispatch();
    const selectedComponent = useSelector((state) => state.header);

    const handleComponentClick = (componentName) => {
        dispatch(selectComponent(componentName));
      };
    return (
        <div 
            className="
                flex items-center justify-center h-10 text-center rounded-3xl shadow-lg px-5 bg-white fixed text-sm w-full 
                lg:w-1/3 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:text-base
            "
        >
            <div className='w-1/6'><Link to='/'>Home</Link></div>
            <div className='w-1/6'><Link onClick={() => handleComponentClick('About')}>About</Link></div>
            <div className='w-1/6'><Link onClick={() => handleComponentClick('Skills')}>Skills</Link></div>
            <div className='w-1/6'><Link onClick={() => handleComponentClick('MyWord')}>My word</Link></div>
            <div className='w-1/6'><Link onClick={() => handleComponentClick('Contact')}>Contact</Link></div>
            <div className='w-1/6'><span><Link to='https://github.com/hoangtu0508'><AiFillGithub className='w-6 h-6 m-auto' /></Link></span></div>
        </div>
    )
}

export default Nav