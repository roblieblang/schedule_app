import { Box } from "@mui/material";
import './Dashboard.css';

export default function DashboardGridThirdRow () {
    return (
        <>
            <Box
                gridColumn="span 4"
                mt={18}
            >
                <div className='UnsTimCard'>
                <h2 className='title'>Unscheduled Time</h2>
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
                <h2 className='title'>Meeting Time</h2>
                <div className='MeeTim'>
                    <div className='MeeTim-wrapper'>
                        <p className='MeeTim-text'>
                            You spent (timeInMeetings) this (timeframe).
                        </p>
                    </div>
                </div>
            </div>
            </Box>
        </>
    )
}