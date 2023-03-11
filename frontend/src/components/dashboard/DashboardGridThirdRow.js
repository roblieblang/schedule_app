import React, {useEffect, useState} from "react";
import axios from "axios";
import { Box, Rating } from "@mui/material";
import './Dashboard.css';
import SubmitQuiz from "../buttons/SatisfactionSubmitButton";
import { useAuth0 } from '@auth0/auth0-react';

export default function DashboardGridThirdRow ({ chronotype }) {
    const {logout} = useAuth0();

    const [value, setValue] = React.useState(2);
    const [averageStartTime, setAverageStartTime] = useState(null);

    const auth0UserData = JSON.parse(
        window.localStorage.getItem(
            '@@auth0spajs@@::SvoR32C9SM8Ze4yeGVnvWGcPt7NP8eLu::https://schedule-app.dev.com::openid profile email'))
                .body.decodedToken.user;

    const setProductiveHours = () => {
        let hours = "";
        switch(chronotype) {
            case "Bear":
                hours = "during the late night";
                break;
            case "Dolphin":
                hours = "is quite irregular. Good luck!";
                break;
            case "Wolf":
                hours = "during the late afternoon and eveing."
                break;
            case "Lion":
                hours = "during the early morning.";
                break;
            default:
                hours = "Please take the chronotype survey.";
        }
        return  hours;
    };

    const localUrl = `http://localhost:3301`;
    const url = `https://group3backend-lukfolvarsky.onrender.com`;

    const handleLogout = () => {
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        });
      };
    
    const getAverageStartTime = async () => {
        try {
            const result = await axios.get(`${url}/gCal/events/average-start-time/${auth0UserData.sub}`);
            setAverageStartTime(result.data);
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 500) {
                handleLogout();
            } else {
                console.log(error);
            }
        }
    };
    
    useEffect(() => {
        getAverageStartTime();
    }, []);


    return (
        <>
            <Box
                gridColumn="span 4"
                mt={18}
            >
                <div className='UnsTimCard'>
                <h2 className='DashboardTitle'>Average Event Start Time</h2>
                <div className='UnsTim'>
                    <div className='UnsTim-wrapper'>
                        <p className='UnsTim-text'>
                            On average your calendar events begin at <strong>{averageStartTime}</strong>. 
                            {chronotype !== ("Empty" || undefined) ? 
                                <div className='UnsTim-text'>
                                    Based on your chronotype of <strong>{chronotype}</strong>, your most productive period is {setProductiveHours()}.
                                </div> : 
                                <div>{setProductiveHours()}</div>     
                            }
                        </p>
                    </div>
                </div>
            </div>
            </Box>
            <Box
                gridColumn="span 3"
                mt={18}
            >
                {/* <div className='MeeTimCard'>
                <h2 className='DashboardTitle'>Meeting Time</h2>
                <div className='MeeTim'>
                    <div className='MeeTim-wrapper'>
                        <p className='MeeTim-text'>
                            You spent (timeInMeetings) this (timeframe).
                        </p>
                    </div>
                </div>
            </div> */}
            </Box>
            <Box 
                gridColumn="9/12" 
                ml={0}
                mt={0}
                display="flex" 
                alignItems="flex-start" 
                justifyContent="center"
            >          
                <div className='SatQuizCard'>
                <h2 className='DashboardTitle'>Satisfaction Quiz</h2>
                <div className='SatQuiz'>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
                <div className="buttonClass22">  <SubmitQuiz QuizValue= {value}> Submit Quiz </SubmitQuiz> </div>
                </div>
            </div>
            </Box>
        </>
    )
}