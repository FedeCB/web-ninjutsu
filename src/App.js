import React from 'react';  
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Container, Card, Col, Row, Navbar } from "react-bootstrap";
import CardContainer from './Components/CardContainer';
import Logo from './assets/Logo.png'
import NavbarApp from './Components/Navbar';
import Tarjeta from './Components/Tarjeta';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import ContactUs from './Components/ContactUs';
import Gallery from './Components/Gallery';
import AboutUs from './Components/AboutUs';
import FilosofiaNinjutsu from './Components/FilosofiaNinjutsu';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyAYW3h8oS4PKB9DuqFkwqezpEkS-vkByFY",

  authDomain: "hayabusa-ninjutsu-web.firebaseapp.com",

  projectId: "hayabusa-ninjutsu-web",

  storageBucket: "hayabusa-ninjutsu-web.appspot.com",

  messagingSenderId: "1066027925036",

  appId: "1:1066027925036:web:517105fb73595d76d59b89",

  measurementId: "G-FFYMK565P2"

};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


const App = () => {
 
  
  

  return (

    

    
    <Router>
      <section className='App'>
      
        <NavbarApp />
        <main>
          <Routes>
            <Route path="/" element={<CardContainer />} exact> </Route>
            <Route path="/contact" element={<ContactUs />} exact> </Route>
            <Route path="/gallery" element={<Gallery />} exact> </Route>
            <Route path="/aboutUs" element={<AboutUs />} exact> </Route>
            <Route path="/filosofiaNinjutsu" element={<FilosofiaNinjutsu />} exact> </Route>
            {/* Add more routes for other pages/components */}
          </Routes>
        </main>
      </section>
    </Router>
  );
}

export default App;
