import React from "react";
import "./userProfile.css";
import { useAuth0 } from "@auth0/auth0-react";
import { BiHelpCircle } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";

const UserProfile: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    isAuthenticated && (
      <div className="userProfile">
        <div className="userProfile__container">
          <div className="userProfile__avatar">
            <img src={user.picture} alt="Avatar" />
          </div>
          <h2>Welcome, {user.nickname}</h2>
        </div>
        <div className="userProfile__menu">
          <div className="userProfile__menu__tile">
            <AiFillEdit className="userProfile__menu__icon" />
            <h3>Account Settings</h3>
            <p>View or make changes to your account</p>
          </div>

          <div className="userProfile__menu__tile">
            <AiFillShopping className="userProfile__menu__icon" />
            <h3>Orders</h3>
            <p>View all your previous and current orders</p>
          </div>

          <div className="userProfile__menu__tile">
            <BiHelpCircle className="userProfile__menu__icon" />
            <h3>Help</h3>
            <p>Get with your user profile or orders</p>
          </div>
        </div>
      </div>
    )
  );
};

export default UserProfile;
