import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AddNewProduct } from "../services/services";
import { useNavigate } from "react-router-dom";
import { TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

const AddProduct = ({ open, onClose, onAddProduct }) => {
  const [productSize, setProductSize] = useState('');
  const [productColour, setProductColour] = useState('');
  const navigate = useNavigate();

  const handleProductSizeChange = (event) => {
    setProductSize(event.target.value);
  };

  const handleProductColourChange = (event) => {
    setProductColour(event.target.value);
  };

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const model = {
      name: data.get("name"),
      description: data.get("description"),
      price: data.get("price"),
      attributes : [{
        productSize:productSize,
        productColour:productColour
      }]
    };
    
    const responce = await AddNewProduct(model);
    console.log("responce", responce);
    if (responce?.status === 201) {
      navigate("/home");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AddBusinessIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New Product
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleAddProduct}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                label="Name"
                // autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="price"
                label="Price"
                name="price"
              />
            </Grid>
            {/* <Grid item xs={12}> */}
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel>Product Size</InputLabel>
                  <Select
                    value={productSize}
                    onChange={handleProductSizeChange}
                    label="Product Size"
                    name="productSize"
                  >
                    <MenuItem value="small">Small</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="large">Large</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel>Product Colour</InputLabel>
                  <Select
                    value={productColour}
                    onChange={handleProductColourChange}
                    label="Product Colour"
                  >
                    <MenuItem value="red">Red</MenuItem>
                    <MenuItem value="blue">Blue</MenuItem>
                    <MenuItem value="green">Green</MenuItem>
                    <MenuItem value="yellow">Yellow</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            {/* </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Product
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddProduct;
