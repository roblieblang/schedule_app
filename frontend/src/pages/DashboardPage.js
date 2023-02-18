import React from 'react';
import NavBar from "../components/navBar/MainNavBar";
import { useAuth0 } from '@auth0/auth0-react';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SelectField from '../components/inputs/SelectField';
import DashboardCard from '../components/dashboard/DashboardCard';
import LineChart from '../components/charts/LineChart';

export default function DashboardPage() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated)
    return (
      <>
        <NavBar />
        <Box 
          marginLeft={32}
          marginTop={2}
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* row 1 */}
          <Box 
            gridColumn="span 3" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <DashboardCard 
              card={ 
                {
                  "id": "busiestCalendar", 
                  "title": "Busiest Calendar", 
                  "mainContent": "Your busiest calendar was {user calendar with most events}."
                }
              }
            />
          </Box>
          <Box 
            gridColumn="span 3" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <DashboardCard 
              card={ 
                {
                  "id": "totalWorkTime", 
                  "title": "Total Work Time", 
                  "mainContent": "You spent {workTime} {units} working {timeframe}."
                }
              }
            />
          </Box>
          <Box 
            gridColumn="span 1" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
           <SelectField 
            optionToSelect={ "Timeframe" }
            options={ ["Today", "This Week", "This Month", "This Year"] }
          />
          </Box>
          <Box 
            gridColumn="span 1" 
            gridRow="span 4"
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            <Divider 
              orientation="vertical" 
              flexItem 
              sx={{ 
                borderRightWidth: 7, 
                mr: 1 }}
            />
          </Box>
          <Box 
            gridColumn="span 3" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            ml={-2}
          >
            <DashboardCard 
              card={ 
                {
                  "id": "myChronotype", 
                  "title": "My Chronotype", 
                  "mainContent": "According to the Chronotype Survey you last took on {dd/mm/yyyy} you are a {chronotype} chronotype."
                }
              }
            />
          </Box>
          {/* row 2 */}
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
              <Box>
              </Box>
              <Typography variant="h6">
                  Satisfaction Score
              </Typography>
              <Box>
              </Box>
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
          {/* row 3 */}
          <Box
            gridColumn="span 4"
            mt={18}
          >
            <DashboardCard 
                card={ 
                  {
                    "id": "unscheduledTime", 
                    "title": "Unscheduled Time", 
                    "mainContent": "{unfilledPercent} of your calendar was unscheduled time this {timeframe}."
                  }
                }
            />
          </Box>
          <Box
            gridColumn="span 3"
            mt={18}
          >
            <DashboardCard 
                card={ 
                  {
                    "id": "meetingTime", 
                    "title": "Meeting Time", 
                    "mainContent": "You spent{timeInMeetings} this {timeframe}."
                  }
                }
            />
          </Box>
        </Box>
      </>
    );
else 
  return (<p>Not Authenticated!</p>);
}