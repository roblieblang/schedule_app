import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../components/buttons/LoginButton';
import LogoutButton from './../components/buttons/LogoutButton';
import '../stylesheets/welcome/WelcomePage.css';

const WelcomePage = () => {
    const { isAuthenticated } = useAuth0();

    return (

        <div className='welcome-page'>
            <h1 className='h1Title'> CALMMOTH </h1>
             
      
            <img className='img1' src={require("../images/calendar/calendar.png")} alt= "Calender" />
            <p className='pClass'> This site will help you organize your busy schedule </p> 

            <img className='img2' src={require("../images/mascots/Mascot.png")}alt= "Mascot" />


                { isAuthenticated ? (
                <div className='buttonClass1'>
                <LogoutButton/> </div> ) :(
                    <>
                    

                    <div className='buttonClass1'>
                        <LoginButton  type='button'> </LoginButton>
                    </div>
                    </> 
                ) 
            }

        </div>

     
    
    );
}

export default WelcomePage;