import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:8080";

  const token = localStorage.getItem('authToken');
  const headers = {
    'x-access-token': token,
    'Content-Type': 'application/json'
  };
  


// console.log('config()', config())

export const Login = async(data)=>{
  try {
    const response = await axios.post(`${apiUrl}/users/login`,data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const Signup = async(data)=>{
  try {
    const response = await axios.post(`${apiUrl}/users/signup`,data)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const Products = async()=>{
  try {
    const response = await axios.get(`${apiUrl}/products`,{ headers })
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const AddNewProduct = async(data)=>{
  try {
    const response = await axios.post(`${apiUrl}/products`,data,{headers})
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const AddNewOrder = async(data)=>{
  try {
    const response = await axios.post(`${apiUrl}/orders`,data,{headers})
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}