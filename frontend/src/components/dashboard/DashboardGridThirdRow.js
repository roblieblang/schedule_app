import React from "react";
import { Box, Rating } from "@mui/material";
import './Dashboard.css';
import SubmitQuiz from "../buttons/SatisfactionSubmitButton";

export default function DashboardGridThirdRow () {
    const [value, setValue] = React.useState(2);

    return (
        <>
            <Box
                gridColumn="span 4"
                mt={18}
            >
                <div className='UnsTimCard'>
                <h2 className='DashboardTitle'>Unscheduled Time</h2>
                <div className='UnsTim'>
                    <div className='UnsTim-wrapper'>
                        <p className='UnsTim-text'>
                            (unfilledPercent) of your calendar was unscheduled time this (timeframe)
                        </p>
                    </div>
                </div>
            </div>
            </Box>
            <Box
                gridColumn="span 3"
                mt={18}
            >
                <div className='MeeTimCard'>
                <h2 className='DashboardTitle'>Meeting Time</h2>
                <div className='MeeTim'>
                    <div className='MeeTim-wrapper'>
                        <p className='MeeTim-text'>
                            You spent (timeInMeetings) this (timeframe).
                        </p>
                    </div>
                </div>
            </div>
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