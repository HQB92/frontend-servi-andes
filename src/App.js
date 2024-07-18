import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import Map from './components/Map';
import Footer from './components/Footer';
import './styles/index.css';


function App() {
    const googleMapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14972.865570343025!2d-72.09909518532828!3d-36.61007943692732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669290e74baabbf%3A0x854842cc88cd5a0d!2sServi%20Andes%20Limitada!5e0!3m2!1ses!2scl!4v1721265681298!5m2!1ses!2scl`;
    return (
        <Container className="container">
            <Header/>
            <Grid item xs={12}>
                <Map src={googleMapUrl}/>
            </Grid>
            <Footer/>
        </Container>
    )
        ;
}

export default App;
