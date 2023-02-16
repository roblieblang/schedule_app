import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../components/buttons/LoginButton';
import SignupButton from './../components/buttons/SignupButton';
import LogoutButton from './../components/buttons/LogoutButton';

const WelcomePage = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className='welcome-page'>
            <h1>This is the Welcome Page</h1>
            { isAuthenticated ? (
                <LogoutButton/> ) : (
                    <>
                        <LoginButton /> or <SignupButton /> 
                    </> 
                ) 
            }
        </div>
    
    );
}

export default WelcomePage;
