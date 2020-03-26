import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import EcoIcon from '@material-ui/icons/Eco';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/user'
import { Grid } from '@material-ui/core'

const styles = {
    header: {
        backgroundColor: 'rgb(88, 141, 114)'
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}



const Header = (props) => {
    const handleLogout = () => {
        console.log("INSIDE HEADER logout props", props)
        props.logout()
    }
    console.log("INSIDE HEADER props", props)
    return (
        <AppBar position="static" style={styles.header}>
            <Toolbar>
                <Grid container>
                    <Grid container item xs={1}>
                        <Grid item>
                            <EcoIcon />
                        </Grid>
                        <Grid item>
                            <Typography>plantr</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} />
                    <Grid item xs={1}>
                        {props.currentUser ?
                            <NavLink to="/login" exact onClick={handleLogout} style={styles.link}>Logout</NavLink>
                            : null}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => ({
    currentUser: state.usersReducer.user
});

const mapDispatchToProps = dispatch => ({
    logout: () => logout()(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)