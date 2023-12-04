import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgClase from "../assets/Clase.jpg";
import imgFoot from "../assets/LogoInfo.png"


const AboutUs = () => {

    
    return (

        <section class="container">
           <h1>Te damos la bienvenida a HAYABUSA NINJUTSU</h1>
           <p>
            <span>

            Prepárate para una transformación, tanto por dentro como por fuera.
            
            </span>
           </p>
           <p>
            <span>

            Únete a HAYABUSA NINJUTSU para sacar a la luz el guerrero que tienes dentro, mejorar tu autoestima y llevar tu práctica al próximo nivel.
            
            </span>
           </p>
           <p>
            <span>

            Nuestras clases son aptas para todos los niveles de habilidades, todos las edades y todos los tipos de cuerpo.
            
            </span>
           </p>
           
           <figure>

                <img className="img-fluid" src={imgClase} alt="imgen Gustavo" />    

           </figure>

           <h2>
                ¿Quiénes somos?
           </h2>
           <p>
            <span>

            Somos una familia con un linaje genuino proveniente de los guerreros más temidos de Japón, los NINJA y los SAMURAI.
            
            </span>
           </p>
           <p>
            <span>

            Con más de 20 años de experiencia en las artes shinobi-samurai y más de 10 años impartiendo clases, somos la mejor opción para que aprendas de la manera correcta como defenderte de los peligros que acechan en nuestro mundo actual.
            
            
            </span>
           </p>
           <p>
            <span>

            También mejorarás tu salud, tu desempeño mental y refinarás tu espíritu.Aprenderás costumbres del Japón y dominarás armas medievales japonesas como la KATANA (Espada), SHURIKEN (Estrellas Ninja) y KUNAI (cuchillo) entre otras más de 20 armas diferentes.
                        
            </span>
           </p>
           <figure>

                <img className="img-fluid" src={imgFoot} alt="imgen Gustavo" />    

           </figure>
           <p>
            <span>

                ¡ANIMATE Y PROBÁ UNA CLASE TOTALMENTE GRATIS!

            </span>
           </p>
           <p>
            <span>

                *APTO PARA TODAS LAS EDADES
                
            </span>
           </p>
           <p>
            <span>

                *APTO PARA TODAS LAS EDADES

            </span>
           </p>
           
        </section>
        

    )

}

export default AboutUs;