import React from 'react'

class ContactForm extends React.PureComponent {  

    render() {
        return (
            <div>
                <h2>Get In Touch</h2>
                <p>
                    Would you like a custom piece crafted? 
                    <br />We can do that! Send us an inquiry and we will be in contact.
                </p>
                <div className="row">
                    <div className="8u 12u$(small)">
                    <form method="post" action="https://formspree.io/f/mleadabq">
                        <div className="row uniform 50%">
                        <div className="6u 12u$(xsmall)">
                            <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            />
                        </div>
                        <div className="6u 12u$(xsmall)">
                            <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            />
                        </div>
                        <div className="12u">
                            <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            rows="4"
                            ></textarea>
                        </div>
                        </div>
                        <ul className="actions" style={{ marginTop: 30 }}>
                        <li>
                            <input type="submit" value="Send Message" />
                        </li>
                        </ul>
                    </form>
                    </div>
                    <div className="4u 12u$(small)">
                    <ul className="labeled-icons">
                        <li>
                        <h3 className="icon fa-envelope-o">
                            <span className="label">Email</span>
                        </h3>
                        <a href="mailto:outsideencased@gmail.com">outsideencased@gmail.com</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>  
        )
    } 
}
export default ContactForm