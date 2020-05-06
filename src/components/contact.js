import React from "react"

const Contact = () => {
    return(
        <form name="contact" method="POST" data-netlify="true">
            <label for="name_input">Name: </label>
            <input type="text" id="name_input" />

            <button type="submit">Let's Chat</button>
        </form>
    )
}

export default Contact