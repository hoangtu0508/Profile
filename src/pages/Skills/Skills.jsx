import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import github from '../../img/github.png'

const Skills = () => {
    const skills = [
        {
            name: 'Html5',
            img: 'https://img.icons8.com/color/48/null/html-5--v1.png'
        },
        {
            name: 'CSS',
            img: 'https://img.icons8.com/color/48/null/css3.png'
        },
        {
            name: 'JavaScript',
            img: 'https://img.icons8.com/color/48/null/javascript--v1.png'
        },
        {
            name: 'Tailwind',
            img: 'https://img.icons8.com/color/48/null/tailwind_css.png'
        },
        {
            name: 'React',
            img: 'https://img.icons8.com/color/48/null/react-native.png'
        },
        {
            name: 'Next',
            img: 'https://img.icons8.com/color/48/null/nextjs'
        },
        {
            name: 'Github',
            img: github
        },
        {
            name: 'Node.js',
            img: 'https://img.icons8.com/color/48/null/nodejs'
        },
        


    ]
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768, // Kích thước màn hình khi chuyển sang di động (thay đổi theo nhu cầu)
                settings: {
                    slidesToShow: 2, // Số slide hiển thị trên desktop
                }
            }
        ]
    };
    return (
        <div className='Skills mt-10'>
            <div className='text-center'>
                <label className='text-oranger font-medium text-base'>MY SKIILS PROGRESS SO FAR</label>
                <h1 className='lg:text-4xl font-bold mt-3 text-3xl'>My Skills</h1>
            </div>
            <div className='mt-10 w-10/12 m-auto'>
                <Slider {...settings}>
                    {
                        skills.map((skill) => (
                            <div className='lg:h-56 h-40 bg-white !w-11/12 mx-2 rounded-md text-center'>
                                <img src={skill.img} className='mx-auto mt-9 w-4/12 lg:mt-12'></img>
                                <h1 className='mt-4 font-medium'>{skill.name}</h1>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Skills