import React from 'react'
import NavBar from '../components/navBar/MainNavBar';
import { Box } from '@mui/system';
import ChronoSummary from '../components/chronotype/ChronoSummary';
import SurveyButton from '../components/buttons/SurveyButton';
import ChronotypeTimeline from '../components/chronotype/ChronotypeTimeline';
import '../stylesheets/mychronotype/chronotype.css';
import ChronotypeTimeline from './../components/chronotype/ChronotypeTimeline';

const MyChronotypePage = () => {

    return (
        <>


            <NavBar />
            <Box sx={{ml: 32, mt: -5, mr: 10}}>

            <div className ='buttonClass111'> <SurveyButton type='button'> </SurveyButton></div> 

            <br></br>

            

        
            
                <ChronoSummary/>
                <ChronotypeTimeline/>
                 
               
            </Box>

           
        </>
    )
}

export default MyChronotypePage;


