import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgRenovando from "../assets/renovando.jpg";

const FilosofiaNinjutsu = () => {

    
    return (

        <section>
              <h1>
                Filosofía HAYABUSA NINJUTSU
            </h1>
           <figure>

            <img className="img-fluid" src={imgRenovando} alt="imgen Gustavo" />    

        </figure>
        </section>

    )

}

export default FilosofiaNinjutsu;