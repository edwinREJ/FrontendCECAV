import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import './StylesHome.css';
import { Link, useLocation } from 'react-router-dom';

export default function MainMenu() {
  const location = useLocation();
  return (
    <Box
      sx={{  
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#edf0fe',
      }}
    >
      <ButtonGroup size="large" aria-label="Large button group">
        <Link to="start">
          <Button className={`boton-menu ${location.pathname.startsWith('/start') ? 'active' : ''}`}>
                Inicio
          </Button>
        </Link>

        <Link to="about">
        <Button className={`boton-menu ${location.pathname.startsWith('/about') ? 'active' : ''}`}>Acerca de</Button>
        </Link>

        <Link to="Servicios">
        <Button className='boton-menu' > Servicios</Button>
        </Link>

        <Button className='boton-menu' >Inscripciones</Button>
        
        <Button className='boton-menu' >Contacto</Button>
      </ButtonGroup>

    
    </Box>
  );
}


