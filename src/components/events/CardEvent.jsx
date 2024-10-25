import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import '../../App.css';
import './StylesEvents.css'

export default function CardEvento({title,info}) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '370px',
        height: '500px',
        resize: 'horizontal',
        boxShadow: '0 4px 5px rgba(0, 0, 0, 0.7)',
        padding: 0,
        borderRadius: '15px', 
        marginBottom: '0px'
      }}
    >
      <Box
        sx={{
          borderTopLeftRadius: '15px', 
          borderTopRightRadius: '15px', 
          padding: 0,
          width: '100%', // Hacer que el ancho de la caja sea 100% del contenedor
          height: '250px', // Permitir que la altura sea ajustable
          maxHeight: '300px', // Altura máxima de la imagen, ajusta según sea necesario
          overflow: 'hidden', // Evita que la imagen se desborde
        }}
      >
        <img
          src="/homeImagenes/DialogosCorno.jpg"
          style={{
           
            width: '100%', // Hacer que la imagen ocupe el 100% del ancho de la caja
            height: '100%', // Hacer que la imagen ocupe el 100% de la altura de la caja
            objectFit: 'cover', // Mantiene la relación de aspecto y cubre todo el contenedor
            display: 'block', // Evita el espacio adicional en la parte inferior de la imagen
          }}
          alt="Info"
        />
      </Box>
      <CardContent sx={{ 
        marginTop: '10px', 
        marginLeft: '20px', 
        marginRight: '20px'
      }}>
        <Typography level="title-lg" sx={{ color: '#000066' }}>
          {title}
         
        </Typography>
        <Typography level="body-sm" sx={{ color: 'blue' }}>
          {info}
        </Typography>
      </CardContent>
      <CardActions className='card-actions-noticias'>
        <Button className='button-new'>
          LEER MÁS
        </Button>
      </CardActions>

    </Card>
  );
}


