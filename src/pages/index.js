import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'
import Layout from '../components/layout'
import { DEFAULT_IMAGES } from '../components/Gallery/constants/defaultImages'

const HomeIndex = () => {
  const siteTitle = 'Outside Encased'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
            Passionate beach-bum and eclectic crafter,&nbsp;
              <br />
              working and creating in Monterey, CA
            </h2>
          </header>
          <p>
            Outside Encased creates a variety of hand-crafted resin art inspired by the natural world. 
            Be sure to check out the <a href="https://www.etsy.com/shop/OutsideEncased" rel="noreferrer" target="_blank">Etsy</a> site for current offerings including lamps, wrist rests, bracelets,
            pendants, and more!   
          </p>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery images={DEFAULT_IMAGES}/>

          <ul className="actions">
            <li>
              <a href="https://www.etsy.com/shop/OutsideEncased" target="_blank" rel="noreferrer" className="button">Items For Sale</a>
            </li>
            <li>
              <a className="button"><Link to="/PastProjects">Past Projects</Link></a>
            </li>
          </ul>
        </section>

        <section id="three">
          <ContactForm />
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
