import { useAuth0 } from '@auth0/auth0-react';
import {AiOutlineUser} from 'react-icons/ai';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (

            <>
                <AiOutlineUser className='acc-icon'/>
                <button className='auth-btn' onClick={() => loginWithRedirect()}>
                Sign In
                </button>
            </>

        )
    )
}

export default LoginButton