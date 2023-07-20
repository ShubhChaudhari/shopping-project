// import React from 'react'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Container } from '@mui/material';

// const Product = () => {
//   return (
//     <Container maxWidth="xl">
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//     </Container>
//   )
// }

// export default Product

import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const ProductCard = ({ image, title, price, description }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    // Add your logic here to update the cart or perform any other necessary actions
  };

  return (
    <Card sx={{ maxWidth: 345, background: "lavender" }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
          Price: {price}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        disabled={isAddedToCart}
        onClick={handleAddToCart}
      >
        {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
      </Button>
    </Card>
  );
};

export default ProductCard;
