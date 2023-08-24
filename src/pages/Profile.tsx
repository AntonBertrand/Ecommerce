import React from 'react'
import Navigation from '../components/navigation/Navigation';
import { useAuth0 } from '@auth0/auth0-react';
import OrderHistory from '../components/orderHistory/OrderHistory';
import UserProfile from '../components/userProfile/UserProfile';


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

  return (
    <>
        <Navigation/>
        <UserProfile/>
        <OrderHistory/>
    </>
  )
}

export default Profile