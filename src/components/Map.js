import React from 'react';
import { Box } from '@mui/material';

const Map = ({ src }) => {
    return (
        <Box sx={{ width: '100%', height: '350px', mt: 2, paddingBottom:'45px'}}>
            <iframe
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0, opacity: 0.75 }}
                allowFullScreen=""
                loading="lazy"
                title="servi-andes-map"
            ></iframe>
        </Box>
    );
}

export default Map;
