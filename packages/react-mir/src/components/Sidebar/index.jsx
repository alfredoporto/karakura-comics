import { Link, useLocation } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import useStyles from './styles';
import { userContext } from "../../hook/user";
import { useContext } from "react";

export default function Sidebar() {
    const { pathname } = useLocation();
    const { user, setUser } = useContext(userContext);
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.logo}>
                <Box>
                    <img width='130px' height='130px' src="./Images/Karakura.gif" />
                </Box>
            </Box>
            <Box>
                <Typography style={{ color: 'white' }}>Bievenido {user ? (user.username) : ("no saltarse el login xd")}</Typography>
            </Box>
            <Box component={Link} to={'/products'} className={pathname === '/products' ? classes.activeItem : classes.desactiveItem}>
                <AssignmentIcon className={classes.icon} />
                <Typography>Productos</Typography>
            </Box>
            <Box component={Link} to={'/shopping'} className={pathname === '/shopping' ? classes.activeItem : classes.desactiveItem}>
                <LocalMallIcon className={classes.icon} />
                <Typography>Carrito</Typography>
            </Box>
            <Box component={Link} to={'/'} className={classes.logout} >
                <PowerSettingsNewIcon className={classes.iconLogout} onClick={() => {
                    // llamar la backend el logout
                    setUser(null)
                }} />
                <Typography>Cerrar sesión</Typography>
            </Box>
        </Box>
    );
}
