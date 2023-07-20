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

function App() {
  const isAuthenticated = () => {
    // Check if the user is authenticated based on the presence of the token
    const authToken = localStorage.getItem("authToken");
    return !!authToken;
  };
  console.log("isAuthenticated", isAuthenticated());

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  useEffect(() => {
    // Redirect to login if not authenticated (optional)
    if (!isAuthenticated()) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
          {/* <Route
            path="/home"
            render={() =>
              isAuthenticated() ? <Home /> : <LogIn />
            }
          /> */}
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
