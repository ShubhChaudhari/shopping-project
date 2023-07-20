import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AddNewProduct } from "../services/services";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ open, onClose, onAddProduct }) => {
  const navigate = useNavigate();

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log('data.get', data.get)
    const model = {
      name: data.get("name"),
      description: data.get("description"),
      price: data.get("price"),
    };
    console.log('model', model)
    const responce = await AddNewProduct(model);
    console.log('responce', responce)
    if(responce?.status === 201){
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
        <Box component="form" noValidate onSubmit={handleAddProduct} sx={{ mt: 3 }}>
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
