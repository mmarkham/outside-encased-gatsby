import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="https://www.outsideencased.com" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
      <strong>Outside Encased </strong> 
      </h1>
      <h1>
       hand-crafted, 
      </h1>
      <h1>
       nature-inspired 
      </h1> 
      <h1>
       resin art
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
