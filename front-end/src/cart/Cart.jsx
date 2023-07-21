import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { ShoppingCartOutlined as MuiShoppingCartOutlined } from "@mui/icons-material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { AddNewOrder } from "../services/services";

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


  // const handleOrderSubmit = ()=>{
  //   const User = localStorage.getItem('user');
  //   const model = {
  //     userId: User.id,
  //     totalAmount: totalAmount,
  //     items : [{
  //       productId:productId,
  //       quantity:cartItems.length,
  //       price:"110000"
  //     }]
  //   };

  //   const responce = await AddNewOrder(model);
  //   console.log("responce", responce);
  //   if (responce?.status === 201) {
  //     navigate("/");
  //   }
  // }

  return (
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
