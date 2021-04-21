import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="localhost:8000/" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Outside Encased</strong> 
        <br />
        hand-crafted,
        <br />
        nature-inspired
        <br />
        resin art
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
