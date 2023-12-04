import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgRenovando from "../assets/renovando.jpg";

const Gallery = () => {

    
    return (

        <section>
            <h1>
                Galería
            </h1>
           <figure>

            <img className="img-fluid" src={imgRenovando} alt="imgen Gustavo" />    

        </figure>
        </section>

    )

}

export default Gallery;