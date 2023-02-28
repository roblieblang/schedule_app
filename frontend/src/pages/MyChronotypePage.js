import React from 'react'
import NavBar from '../components/navBar/MainNavBar';
import { Box } from '@mui/system';
import ChronoSummary from '../components/chronotype/ChronoSummary';
import ChronotypeTimeline from '../components/chronotype/ChronotypeTimeline';
import TakeSurvey from '../components/buttons/SurveyButton';

const MyChronotypePage = () => {
   
    return (

        <>
        
            <NavBar />
            <Box sx={{ml: 32, mt: -5, mr: 10}}>
                <ChronoSummary/>
                <ChronotypeTimeline/>
            </Box>

            <TakeSurvey></TakeSurvey>

         </>
            

        
    )
}

export default MyChronotypePage;