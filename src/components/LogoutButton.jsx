import { useAuth0 } from '@auth0/auth0-react';
import {AiOutlineUser} from 'react-icons/ai';
import {FaSignOutAlt} from 'react-icons/fa';
import './accountButtons.css'
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    const navigate = useNavigate();

    return (
        isAuthenticated && ( 
            <div className="accountBtn">
                <div className="accountBtn__container">
                    <AiOutlineUser className='acc-icon'/>
                    <button className='auth-btn' onClick={() => navigate('/profile')}>
                        Account
                    </button>
                </div>


                <div className="accountBtn__container">
                    <FaSignOutAlt className='acc-icon'/>
                    <button className='auth-btn' onClick={() => logout()}>
                        Sign Out
                    </button>
                </div>
            </div>

        )
    )
}


export default LogoutButton