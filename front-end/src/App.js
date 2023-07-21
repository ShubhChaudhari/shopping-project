import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Redirect
} from "react-router-dom";
import LogIn from "./login/LogIn";
import SignUp from "./signup/SignUp";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import "./index.css";
import Cart from "./cart/Cart";
import ThankYouPage from "./thank-you/ThankYou";
import AddProduct from "./product/AddProduct";
import { useEffect } from "react";
// import PrivateRoute from "./utils/PrivateRoute";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<AddProduct />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
