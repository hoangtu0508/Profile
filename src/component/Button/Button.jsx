import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    const name = props.name
    const to = props.to
  return (
    <div>
        <Link to={to} className='hover:bg-slate-600 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 h-14 flex items-center justify-center mt-6'>{name}</Link>
    </div>
  )
}

export default Button