import { Drawer, List, ListItemText, ListItemIcon, ListItemButton, Divider } from '@mui/material';
import {CalendarMonth, Schedule, FactCheck, Dashboard} from '@mui/icons-material/';
import Typography  from '@mui/material/Typography';

export const drawerWidth = 240

const scheduleMenuItems =[
    {text: "Dashboard", icon: <Dashboard />, path: "/dashboard"},
    {text: "Calendar", icon: <CalendarMonth />, path: ""},
];
const chronotypeMenuItems =[
    {text: "My Chronotype", icon: <Schedule />, path: ""},
    {text: "Interesting Facts", icon: <FactCheck />, path: ""},
]

export  function SideNavBar() {
    return (
        <Drawer 
            variant="permanent"
            anchor="left"
            PaperProps={{
                sx: {
                  width: drawerWidth,
                  backgroundColor: "#56B195", 
                  color: "white"                  
                }
            }}
        >
            <div>
                <Typography variant="h6" sx={{mt: 8, ml: 2}}>
                    Schedule
                </Typography>
                <List sx={{ml: -4}}>
                    {scheduleMenuItems.map((item) => (
                        <ListItemButton
                            key={item.text}
                            href={item.path}
                            sx={{ml: 7}}
                        >
                            <ListItemIcon sx={{mr: -3}}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}    
                </List>
            </div>
            <Divider />
            <div>
                <Typography variant="h6" sx={{ml: 2}}>
                    Chronotypes
                </Typography>
                <List sx={{ml: -4}}>
                    {chronotypeMenuItems.map((item) => (
                        <ListItemButton
                            key={item.text}
                            href={item.path}
                            sx={{ml: 7}}
                        >
                            <ListItemIcon sx={{mr: -3}}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}    
                </List>
            </div>
        </Drawer>
    )
    
}