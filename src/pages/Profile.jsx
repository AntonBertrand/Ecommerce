import React from 'react'
import Navigation from '../components/navigation/Navigation';
import { useAuth0 } from '@auth0/auth0-react';
import OrderHistory from '../components/orderHistory/OrderHistory';


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

  return (
    <>
        <Navigation/>
        <OrderHistory/>
    </>
  )
}

export default Profile