import React from "react"

import "../styles/contact.scss" 

const Contact = () => {
    return(
        <div className="container form-area" id="form-container">
            <h2 id="contact-header">Get in Touch</h2>
            <p className="contact-subline">The best way to reach me is on <a className="contact-links" href="https://twitter.com/JJAggas">Twitter</a> or <a className="contact-links" href="https://www.instagram.com/joshuaaggas/">Instagram</a> 
            &nbsp;but if enough people bug me about it I'll create a form.</p>
            {/*<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" data-netlify="true" value="contact" name="contact" />
                
                <div className="form-group">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" />
                </div>

                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>

                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>        
                </div>

                <div className="submit-group">
                    <button type="submit" className="form-submit" disabled="false">Let's Chate</button>
                </div>
            </form>
            */}
        </div>
    )
}

export default Contact