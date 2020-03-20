import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import EcoIcon from '@material-ui/icons/Eco';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <EcoIcon />
                <Typography>plantr</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header