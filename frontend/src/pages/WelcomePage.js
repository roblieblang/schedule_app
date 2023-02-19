import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../components/buttons/LoginButton';
import SignupButton from './../components/buttons/SignupButton';
import LogoutButton from './../components/buttons/LogoutButton';
import './WelcomePage.css';

const WelcomePage = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className='welcome-page'>
            <h1 className='h1Class'> Schedule App</h1>
             
      
            <img className='img1' src={require("./calendar.png")} alt= "Calender" />
            <p className='pClass'> This site will help you organize your busy schedule </p> 

            <img className='img2' src={require("./Mascot.png")}alt= "Mascot" />
            

            
            
            { isAuthenticated ? (
                <LogoutButton className = 'buttonClass'/> ) : (
                    <>
                        <LoginButton className = 'buttonClass' type='button'>  </LoginButton>
                    </> 
                ) 
            }
        </div>
     
    
    );
}

export default WelcomePage;
