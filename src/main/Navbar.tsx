import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const Navbar: React.FC = () => {

    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    L.I.T
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;