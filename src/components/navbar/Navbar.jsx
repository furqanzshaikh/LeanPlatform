import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <nav>
        <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6597aa471e6491a6bf32f256_2024_GX_LOGO%202.svg" alt="" />
        <a className='Capitilize'>Learning</a>
        <a className='Capitilize'>Community</a>
        <a className='Capitilize'>Outcomes</a>
        <a className='upper'>ELEVATE</a>
        <a className='Capitilize'>For Teams</a>
        <a className='Capitilize'>limited Expreice</a>
        <select className='Capitilize'>
            <option value="Library">Library</option>

        </select>
        <select className='upper'>
            <option className='upper' value="Craft">Craft</option>
        </select>
        <a className='Capitilize'>Login</a>

        <button>Become a Member</button>
    </nav>
    



</>
  )
}

export default Navbar