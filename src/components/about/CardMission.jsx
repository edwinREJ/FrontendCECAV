import * as React from 'react'; // Asegúrate de que esta línea esté al principio y solo una vez.
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardMission({ title, info }) {
  return (
    <Box sx={{ width: 350, height: 400 }}>
      <Card 
        variant="outlined" 
        sx={{ 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgb(56,60,148)', 
          color: 'white', 
          borderRadius: '16px' 
        }} 
      >
        <CardContent>
          <Typography 
            align="center" 
            gutterBottom 
            sx={{ marginTop: '10%', color: 'white', fontSize: 20 }} 
          >
            {title}
          </Typography>
          
          <Typography 
            align="center"  
            sx={{ marginTop: '20%',color:'white' }}  
            variant="body2"
          >
            {info} 
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}



