import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'
import Layout from '../components/layout'
import { PAST_IMAGES } from '../components/Gallery/constants/pastimages'

const PastProjects = () => {
    const siteTitle = 'Outside Encased'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
  
        <div id="main">
          <section id="two">
            <h2>Past Projects</h2>
  
            <Gallery images={PAST_IMAGES} />
  
            <ul className="actions">
              <li>
                <a href="https://www.etsy.com/shop/OutsideEncased" target="_blank" rel="noreferrer" className="button">Items For Sale</a>
              </li>
              <li>
                <a className="button"><Link to="/">Back</Link></a>
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
  
  export default PastProjects