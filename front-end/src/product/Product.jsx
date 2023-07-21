import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const ProductCard = ({ image, title, price, description, setCartItems,product }) => {

  const handleAddToCart = () => {
    setCartItems((prevItems) => [...prevItems, product]);
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
        onClick={handleAddToCart}
      >
       Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
