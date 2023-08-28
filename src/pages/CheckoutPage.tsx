import React from "react";
import Navigation from "../components/navigation/Navigation";
import Checkout from "../components/checkout/Checkout";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }

  return (
    <>
      <Navigation />
      <Checkout />
    </>
  );
};

export default CheckoutPage;
