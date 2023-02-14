import {AppBar, Toolbar, IconButton} from "@mui/material"
import Typography from '@mui/material/Typography';
import EventNoteIcon from "@mui/icons-material/EventNote"
import { Stack } from "@mui/system"
import ProfileNavMenu from "./ProfileNavMenu";
import {drawerWidth} from "./SideNavBar"

export default function  HeaderNavBar() {
    return (
        <>
        <AppBar 
            position="static" 
            sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                backgroundColor: "white"
            }}
        >
            <Toolbar sx={{color: "black"}}>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <EventNoteIcon />
                </IconButton>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1}}>
                    SCHEDULE APP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <ProfileNavMenu />
                </Stack>
            </Toolbar>
        </AppBar>
        <Toolbar /> 
        </>
    )
}