import React,{useState} from 'react'
import logo from '../assets/Logo .svg'
const Nav = () => {
    const[openMenu,setOpenMenu]=useState(false);
    const toggleMenu=()=>{
        setOpenMenu(!openMenu);
    }
  return (
    <nav className={`navbar ${openMenu? "open":""}`}>
      <a href = "/"><img src = {logo}></img></a>
      
      <div className='menu-icon' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

      <ul className={`nav-links ${openMenu? "visible" :""}`}>
        <li> 
            <a href="/">Home</a>
        </li>
        <li> 
            <a href="/about">About</a>
        </li>
        <li> 
            <a href="/menu">Menu</a>
        </li>
        <li> 
            <a href="/booking">Reservations</a>
        </li>
        <li> 
            <a href="/orderOnline">Order Online</a>
        </li>
        <li> 
            <a href="/login">Login</a>
        </li>
      </ul>


    </nav>
  )
}

export default Nav


