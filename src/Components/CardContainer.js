import React from 'react';
import Tarjeta from './Tarjeta';
import { Card } from 'react-bootstrap';
import imgGustavo from "../assets/Gustavo.jpg";
import imgLogo from "../assets/LogoAmarillo.png";
import imgClase from "../assets/Clase.jpg";
import imgLogoDatos from "../assets/LogoInfo.png";
import ContactUs from '../Components/ContactUs';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

     
const CardContainer = () => {

    const tarjetas =[
        {
            id:1,
            title: "Sobre Nosotros",
            img: imgGustavo,
            url:"/aboutUs",
        },
        {
            id:2,
            title: "Galería",
            img: imgClase,
            url:"/gallery",
        },
        {
            id:3,
            title: "Filosofía HAYABUSA NINJUTSU",
            img: imgLogo,
            url:"/filosofiaNinjutsu",
        },
        {
            id:4,
            title: "Contáctanos",
            img: imgLogoDatos,
            url:"/contact",
        }
    ]

    return(
        
        <section className='container px-2'>
            
            <div className='row p-top-5'>

                
                    {
                        tarjetas.map(tarjeta => 
                           <div className='col-md-6 col-sm-12 py-1 ' key={tarjeta.id}>
                               <Tarjeta title={tarjeta.title} imgSource={tarjeta.img} url={tarjeta.url}/>
                           </div>

                           )
                    }
                
                             
            </div>

            
            
        </section>
    );
}

export default CardContainer;