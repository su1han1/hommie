import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { AppBar, Toolbar, Link, Box, Button, Avatar, Typography } from "@material-ui/core"
import { Link as RouterLink } from "react-router-dom"
import { AppState, UserState, signOut } from '../../reducers';
import { connect } from 'react-redux';

interface Props {
    user: UserState
    signOut: typeof signOut
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        navbar: {
            backgroundColor: theme.palette.background.paper,
            paddingLeft: 50,
            paddingRight: "4.17%",
            fontSize: 14,
        },
        left: {
            flexGrow: 1,
            display: "flex",
        },
        navbarBtn: {
            borderWidth: 10,
        },
        user: {
            marginLeft: 30,
            display: 'flex',
            alignItems: 'center',
        },
        userAvatar: {
            width: 30,
            height: 30,
            marginRight: 10,
        },
        signOut: {
            fontSize: 12,
            marginLeft: 17,
        }
    })
)

const Navbar = (props: Props) => {
    const classes = useStyles();
    const { user } = props.user

    const handleSignOut = () => {
        props.signOut()
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Box className={classes.left}>
                        <Link component={RouterLink} to="/">
                            <Box mr={2}><img src="/nav_logo.png" alt="hommie" /></Box>
                        </Link>
                        <Button component={RouterLink} to="/search-housing" style={{ fontSize: 14 }}>Search Housing</Button>
                        {/* <Button style={{ fontSize: 14 }}>Search Roommates</Button> */}
                    </Box>
                    <Button style={{ fontSize: 14, marginRight: 20, borderWidth: 3 }} variant="outlined" color="primary" size="small" component={RouterLink} to="/house/list-house">
                        List My Place
                    </Button>
                    {(user._id === '') && 
                        <div className={classes.user}>
                            <Button component={RouterLink} to="/sign-in" style={{ fontSize: 14 }}>Sign In</Button>
                            <Button component={RouterLink} to="/sign-up" style={{ fontSize: 14 }}>Sign Up</Button>
                        </div>
                    }
                    {(user._id !== '') && 
                        <div className={classes.user}>
                            {user.avatar && 
                                <Avatar src={user.avatar} className={classes.userAvatar} />
                            }
                            {!user.avatar && 
                                <Avatar className={classes.userAvatar}>
                                    {user.username[0]}
                                </Avatar>
                            }
                            <Typography>{`Hi, ${user.username.split(' ')[0]}`}</Typography>
                            <Button onClick={handleSignOut} variant='outlined' size='small' className={classes.signOut}>Sign Out</Button>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    user: state.user
})

export default connect(
    mapStateToProps,
    { signOut}
)(Navbar)