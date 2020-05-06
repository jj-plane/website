import React from "react"

const Contact = () => {
    return(
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" data-netlify="true" value="contact" name="contact" />
            
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" />

            <button type="submit">Let's Chat</button>
        </form>
    )
}

export default Contact