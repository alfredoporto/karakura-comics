import React from "react";
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import LocalMallIcon from '@material-ui/icons/LocalMall';

export default function Sidebar() {

    return (
        <Box sx={{ height: '100%', backgroundColor: 'black', padding: '0px 10px', mr: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
            <Box><img width='130px' height='130px' src="./Images/Karakura.gif" /></Box>
            </Box>
            <Divider />
            <Box component={Link} to={'/products'} sx={{ backgroundColor: 'white',color:'black', borderRadius: '8px', display: 'flex', py: 1, px: 1, my: 1, textDecoration: 'none' }}>
                <AssignmentIcon style={{ marginRight: '5px', color: 'black' }} />
                <Typography>Productos</Typography>
            </Box>
            <Divider />
            <Box component={Link} to={'/shopping'} sx={{ borderRadius: '8px', display: 'flex', color: 'white', py: 1, px: 1, my: 1, textDecoration: 'none' }}>
                <LocalMallIcon style={{ marginRight: '5px' }} />
                <Typography>Carrito</Typography>
            </Box>
            <Divider />
            <Box component={Link} to={'/'} sx={{ display: 'flex', mt: '50vh', color: 'white', textDecoration: 'none' }}>
                <PowerSettingsNewIcon style={{ marginRight: '5px', fontSize: '25px' }} />
                <Typography sx={{ mt: 1 }}>Cerrar sesión</Typography>
            </Box>
        </Box>
    );
}
