import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgClaseDojo from "../assets/ClaseDojo.jpg";

const ContactUs = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name, email, message)
    }

    return (

        <section class="container">
            <h1>Contáctanos</h1>
           <p>
            <span>

            No dudes en contactarnos si tienes alguna pregunta o solicitud especial.
            
            </span>
           </p>
           <p>
            <span>

            Dirección: Carlos de la Vega 6099
            
            </span>
           </p>
           <p>
            <span>

            E-mail: hayabusaguts@gmail.com
            
            </span>
           </p>
           <p>
            <span>

            Teléfono/Whatsapp: +59896767585
            
            </span>
           </p>
            <figure>

                <img className="img-fluid" src={imgClaseDojo} alt="imgen Gustavo" />    

            </figure>
            <p>
                
            </p>

            {/* <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
                </div>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form> */}
        </section>

    )

}

export default ContactUs;