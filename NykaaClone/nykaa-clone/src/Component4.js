import React from 'react'
import './Component4.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Component4 = (props) => {
    

     
  return (
    <div>
       <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="500"
          image={props.card1}
          alt="green iguana"
        />
        <CardContent >
          <Typography variant="body2" color="text.secondary">
          <div class="discount-text">{props.text1}</div>
          <div class="description">{props.text2}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default Component4
