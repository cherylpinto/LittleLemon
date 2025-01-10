import React from 'react'
import {Link} from "react-router-dom"
import Image from "../assets/Header.jpeg"
const Header = () => {
  return (
    <>
    <div className='header-container'>
      <div className="title-container">
        <h2 className='h2-color'>Little Lemon</h2>
        <h4 className='h4-color'>Chicago</h4>
        <p className='p-color'>We are a family owned Mediterraneran restaurant, focused on traditional recepies served with a modern twist.  </p>
        <Link to="/booking"><button>Reserve Table</button></Link>
      </div>
      <div className='image-container'>
        <img src={Image}></img>
      </div>
    </div>
   
  </>
  )
}

export default Header
