import React from 'react'
import image from "../assets/Logo .svg"

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
            <img src={image}></img>
            <p>We are a family owned Mediterraneran restaurant. focused on traditional recepies served with modern twist</p>
        </div>
        <div>
            <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/orderOnline">Order Online</a></li>
                <li><a href="/login">Login</a></li>

            </ul>
        </div>
        <div>
            <h3>Contact</h3>
            <ul>
                <li>Address:<br/>123 Towncity, USA</li>
                <li>Phone:<br/>+91 1234567890</li>
                <li>Email:<br/>+91 little@lemon.com</li>
            </ul>
        </div>
        <div>
            <h3>Social Media Links</h3>
            <ul>
                <li><a href="https://x.com/">Twitter</a></li>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a href="https://www.facebook.com/">Facebook</a></li>
            </ul>
        </div>
      </section>
      <div className='copyright'>
            <p>©Copyright <b>Little Lemon</b>. All rights reserved. </p> 
      </div>
    </footer>
  )
}

export default Footer
