import { Box } from "@mui/material";
import LineChart from "../charts/LineChart";

export default function DashboardGridSecondRow() {
    return (
        <>
            <Box
                gridColumn="span 6"
                gridRow="span 1"
            >
                <h2 className='title'>Satisfaction Score</h2>
                
                <Box 
                    height="250px" 
                    m="0 0 0 0" 
                    backgroundColor="#d9d9d9" 
                    borderRadius={2.5}
                >
                    <LineChart />
                </Box>
            </Box>
            {/* Box to the right of the chart, and beneath the chronotype box */}
            <Box 
                gridColumn="span 4" 
                gridRow="span 2"
                ml={-2}
                pl={-10}
                mr={5}
                mt={4}
                display="flex" 
                alignItems="center" 
                justifyContent="center"
            >          
                <div className='DidYouCard'>
                <h2 className='title'>Did You Know?</h2>
                <div className='DidYou'>
                    <div className='DidYou-wrapper'>
                        <p className='DidYou-text'>
                        A chronotype is the behavioral manifestation of underlying circadian rhythm's myriad of physical processes. A person's chronotype is the propensity for the individual to sleep at a particular time during a 24-hour period.
                        </p>
                    </div>
                </div>
            </div>
            </Box>
        </>
    )
}