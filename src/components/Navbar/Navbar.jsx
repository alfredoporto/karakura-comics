import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/karakura-logo.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Karakura Comics" height="30px" className={classes.image} />
                        Karakura Comics
                    </Typography>
                    {/* este div es un comodin que va a crecer tanto como sea necesario */}
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="SHow cart items" color="inherit">
                            {/* el badge content luego se implementara para que jale los datos */}
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )

}

export default Navbar;



