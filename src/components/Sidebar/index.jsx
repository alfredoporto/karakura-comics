import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import LocalMallIcon from '@material-ui/icons/LocalMall';

export default function Sidebar() {

    return (
        <Box sx={{ height: '100%', backgroundColor: '#070C9F', padding: '0px 10px', mr: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 3, color: 'white' }}>
                <Typography>Karakura</Typography>
            </Box>
            <Divider />
            <Box sx={{ backgroundColor: 'white', borderRadius: '8px', display: 'flex', py: 1, px: 1, my: 1 }}>
                <AssignmentIcon style={{ marginRight: '5px', color: '#070C9F' }} />
                <Typography>Productos</Typography>
            </Box>
            <Divider />
            <Box sx={{ borderRadius: '8px', display: 'flex', color: 'white', py: 1, px: 1, my: 1 }}>
                <LocalMallIcon style={{ marginRight: '5px' }} />
                <Typography>Carrito</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', mt: '150px', color: 'white' }}>
                <PowerSettingsNewIcon style={{ marginRight: '5px', fontSize: '25px' }} />
                <Typography sx={{ mt: 1 }}>Cerrar sesión</Typography>
            </Box>
        </Box>
    );
}
