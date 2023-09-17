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
                flex items-center justify-center h-10 text-center rounded-3xl shadow-lg px-5 bg-white fixed text-sm w-full font-semibold z-50
                lg:w-1/3 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:text-base
            "
        >
            <div className='m-auto'><Link to='/'>Home</Link></div>
            <div className='m-auto'><Link onClick={() => handleComponentClick('About')}>About</Link></div>
            <div className='m-auto'><Link onClick={() => handleComponentClick('Skills')}>Skills</Link></div>
            <div className='m-auto'><Link onClick={() => handleComponentClick('MyWord')}>My Word</Link></div>
            <div className='m-auto'><Link onClick={() => handleComponentClick('Experience')}>Experience</Link></div>
            <div className='m-auto'><Link to='https://github.com/hoangtu0508'><AiFillGithub className='w-6 h-6 m-auto' /></Link></div>
        </div>
    )
}

export default Nav