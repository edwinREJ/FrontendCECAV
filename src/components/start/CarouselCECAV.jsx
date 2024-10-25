import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import IconButton from '@mui/joy/IconButton';

const images = [
    { src: '/homeImagenes/cecavHome-scaled.jpg' },
    { src: '/homeImagenes/IMG_6021-scaled.jpg' },
    { src: '/homeImagenes/IMG_6496-scaled.jpg' },
];

const CarouselCECAV = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar la imagen automáticamente después de 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 4000); // Cambia cada 4 segundos (4000 ms)

        return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }, [currentIndex]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
            <IconButton
                onClick={prevImage}
                variant="contained"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    backgroundColor: '#edf0fe',
                    borderRadius: '50%',
                }}
            >
                <MdArrowBackIosNew style={{ fontSize: '1.5rem' }} />
            </IconButton>

            <Box sx={{ width: '100%', textAlign: 'center' }}>
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
                <Typography variant="caption" display="block" align="center">
                    {images[currentIndex].alt}
                </Typography>
            </Box>

            <IconButton
                onClick={nextImage}
                variant="contained"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    backgroundColor: '#edf0fe',
                    borderRadius: '50%',
                }}
            >
                <MdArrowForwardIos style={{ fontSize: '1.5rem' }} />
            </IconButton>
        </Box>
    );
};

export default CarouselCECAV;


