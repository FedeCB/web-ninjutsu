import React from "react";
import { Card } from "react-bootstrap";
import '../Components/Tarjeta.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

 

const Tarjeta = ({title, imgSource, url}) => {
    return(

        <section className="card">
            <section className="card-body py-5">
                <figure className="">
                    <img className="img-fluid" src={imgSource} alt="imgen Gustavo" />
                    
                </figure>
                <h2 className="card-title  text-bg-secondary">
                    {title}
                </h2>
                <p className="btn text-bg-secondary" >
                    
                    <Link to={url}>Más información.</Link>
                                                  
                </p>
                
            
            </section>
        </section>

    );
}

export default Tarjeta;