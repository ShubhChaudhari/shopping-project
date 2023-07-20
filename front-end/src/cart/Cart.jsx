import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { ShoppingCartOutlined as MuiShoppingCartOutlined } from "@mui/icons-material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const CLIENT_ID = process.env.CLIENT_ID_KEY || "AXPR4WS8TRgin-lZJ2dYG_tWxRQlt9upGekFRhvqWHx3HaZ6f9NMYRxVnl4adp7AhXjmfHVbmBWx9x03"

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const navigate = useNavigate();

  const cartItems = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 15 },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 20,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      navigate("/thankyou");
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);

  return (
    // <div className="bg-gray-100 p-4 rounded-lg shadow">
    //   <div className="flex items-center mb-4">
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h10a1 1 0 010 2H9a1 1 0 010-2zm2-9a2 2 0 100-4 2 2 0 000 4zM5 19a1 1 0 01-1-1V6a1 1 0 011-1h1M19 19V6m0 13h1a1 1 0 001-1V6a1 1 0 00-1-1h-1" />
    //     </svg>
    //     <h2 className="text-xl ml-2">Your Shopping Cart</h2>
    //   </div>
    //   <ul>
    //     {cartItems.map((item) => (
    //       <li key={item.id} className="flex items-center justify-between mb-2">
    //         <span>{item.name}</span>
    //         <span>${item.price}</span>
    //         <button className="bg-red-500 text-white rounded px-2 py-1">Remove</button>
    //       </li>
    //     ))}
    //   </ul>
    //   <div className="flex items-center justify-between mt-4">
    //     <span className="font-semibold">Total:</span>
    //     <span>20,000</span>
    //   </div>
    //   <button className="mt-4 bg-primary-500 text-white rounded px-4 py-2">Checkout</button>
    // </div>
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <div className="flex items-center mb-4">
        <MuiShoppingCartOutlined fontSize="large" color="primary" />
        <Typography variant="h6" component="h2" className="ml-2">
          Your Shopping Cart
        </Typography>
      </div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between mb-2">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <Button variant="contained" color="error" size="small">
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-4">
        <Typography
          variant="subtitle1"
          component="span"
          className="font-semibold"
        >
          Total:
        </Typography>
        <Typography variant="subtitle1" component="span">
          ${totalAmount}
        </Typography>
      </div>
      <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <Button variant="contained" color="primary" className="mt-4" onClick={() => setShow(true)}>
        Checkout
      </Button>
      {show ? (
        <div className="flex justify-center">
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={createOrder}
              onApprove={onApprove}
            />
        </div>
      ) : null}
      </PayPalScriptProvider>
    </div>
  );
};

export default Cart;
