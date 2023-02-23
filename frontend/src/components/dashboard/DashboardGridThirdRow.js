import { Box } from "@mui/material";
import DashboardCard from "./DashboardCard";


export default function DashboardGridThirdRow () {
    return (
        <>
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
        </>
    )
}