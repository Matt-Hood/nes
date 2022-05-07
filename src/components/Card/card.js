import React from 'react'
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';


const card = (props) => {
  const {
    eyebrow, logo, title, titleH2, body, componentPosition, logoPosition, logoName, logoNameAttribution, primary, secondary, showRating
  } = props
  return (
    <Card sx={{ minWidth: 275 }}>
      <LanguageIcon/>
    <CardContent>
    
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2">
       {body}
      </Typography>
    </CardContent>
{
  showRating ? <StarRatingComponent 
  name="rate1" 
  starCount={5}
  value={4}
/> : ''
}
   
  </Card>
    
  )
}

export default card