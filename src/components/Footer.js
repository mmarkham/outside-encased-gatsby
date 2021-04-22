import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
       <li>
          <a href="https://www.etsy.com/shop/OutsideEncased" target="_blank" className="icon fa-etsy">
            <span className="label">Etsy</span>
          </a>
        </li>
        {/* <li>
          <a href="https://www.facebook.com/groups/DogspottingSociety/" target="_blank" className="icon fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li> */}
        <li>
          <a href="https://www.instagram.com/outsideencased/" target="_blank" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="mailto:outsideencased@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Outside Encased</li>
      </ul>
    </div>
  </div>
)

export default Footer
