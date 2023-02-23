import { Box, Divider } from "@mui/material";
import DashboardCard from "./DashboardCard";
import SelectField from "../inputs/SelectField";


export default function DashboardGridFirstRow () {
    return (
        <>
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
        </>
    );
}