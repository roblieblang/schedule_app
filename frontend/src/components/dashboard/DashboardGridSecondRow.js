import { Box, Typography } from "@mui/material";
import LineChart from "../charts/LineChart";
import DashboardCard from "./DashboardCard";

export default function DashboardGridSecondRow() {
    return (
        <>
            <Box
                gridColumn="span 6"
                gridRow="span 1"
            >
                <Box
                    mt={1}
                    p="0"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    backgroundColor="#d9d9d9"
                    borderRadius={5}
                >
                    <Box />
                    <Typography variant="h6">
                        Satisfaction Score
                    </Typography>
                    <Box />
                </Box>
                <Box 
                    height="250px" 
                    m="-20px 0 0 0" 
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
                <DashboardCard 
                    card={ 
                        {
                        "id": "didYouKnow", 
                        "title": "Did You Know?", 
                        "mainContent": "A chronotype is the behavioral manifestation of underlying circadian rhythm's myriad of physical processes. A person's chronotype is the propensity for the individual to sleep at a particular time during a 24-hour period."
                        }
                    }
                />
            </Box>
        </>
    )
}