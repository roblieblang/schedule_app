import React from 'react'
import NavBar from '../components/navBar/MainNavBar';
import { Box } from '@mui/system';
import FactsHistory from '../components/interestingfacts/FactsHistory';
import FactsListen from '../components/interestingfacts/FactsListen';
import FactsSpeech from '../components/interestingfacts/FactsSpeech';

const InterestingFactsPage = () => {
   
    return (
        <>
            <NavBar />
            <Box sx={{ml: 32, mt: -5, mr: 10}}>
                <FactsHistory/>
                <FactsListen/>
                <FactsSpeech/>
            </Box>
        </>
    )
}

export default InterestingFactsPage;