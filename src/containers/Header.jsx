import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import EcoIcon from '@material-ui/icons/Eco';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/user'

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
                <EcoIcon />
                <Typography>plantr</Typography>
                {props.currentUser ?
                    <NavLink to="/login" exact onClick={handleLogout} style={styles.link}>Logout</NavLink>
                    : null}
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