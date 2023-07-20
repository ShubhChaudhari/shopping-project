import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:8080";

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
    const response = await axios.get(`${apiUrl}/products`)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const AddNewProduct = async(data)=>{
  try {
    const response = await axios.post(`${apiUrl}/products`,data)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}