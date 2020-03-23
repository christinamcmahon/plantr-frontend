import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import EcoIcon from '@material-ui/icons/Eco';

const styles = {
    header: {
        backgroundColor: 'rgb(88, 141, 114)'
    }
}

const Header = () => {
    return (
        <AppBar position="static" style={styles.header}>
            <Toolbar>
                <EcoIcon />
                <Typography>plantr</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header