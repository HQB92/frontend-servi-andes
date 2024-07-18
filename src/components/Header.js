import React from 'react';
import { Typography, Box } from '@mui/material';
import logo from '../assets/logo.png';


const Header = () => {
    return (
        <Box sx={{
            textAlign: 'center',
            py: 2,
            backgroundColor: '#fcfcfc66',
            color: 'black'
        }}>
            <Typography variant="h3">Servi Andes</Typography>
            <Typography variant="subtitle1">Reparación de maquinaria</Typography>
        </Box>
    );
}

export default Header;
