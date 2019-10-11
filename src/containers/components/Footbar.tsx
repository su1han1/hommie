import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Box, Typography, Link } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "top",
            backgroundColor: "#f2f2f2",
            height: 325,
            paddingTop: 75,
            paddingLeft: 50,
            paddingRight: 50,
            marginTop: 170,
        },
        footbarLogo: {
            flexGrow: 1,
        }
    })
)

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.footbarLogo}><img src="./footbar-logo.png" alt="footbar-logo"/></Box>
            <Box mr={10}>
                <Typography variant="h3">
                    <Box mb={3}>Hommie</Box>
                </Typography>
                <Typography style={{fontSize: 24}}>
                    <Link color="inherit" component={RouterLink} to="/trust-safety">Trust & Safety</Link> <br/>
                    <Link color="inherit" component={RouterLink} to="/help-center">Help Center</Link> <br/>
                    <Link color="inherit" component={RouterLink} to="/how-it-works">How it works</Link> <br/>
                </Typography>
            </Box>
            <Box mr={10}>
                <Typography variant="h3">
                    <Box mb={3}>Property</Box>
                </Typography>
                <Typography style={{fontSize: 24}}>
                    <Link color="inherit" component={RouterLink} to="/list-your-property">List your Property</Link> <br/>
                    <Link color="inherit" component={RouterLink} to="/property-manager">Property Manager</Link> <br/>
                    <Link color="inherit" component={RouterLink} to="/community-center">Community Center</Link> <br/>
                </Typography>
            </Box>
            <Box mr={10}>
                <Typography variant="h3">
                    <Box mb={3}>About Us</Box>
                </Typography>
                <Typography style={{fontSize: 24}}>
                    <Link color="inherit" component={RouterLink} to="/terms-of-use">Terms of Use</Link> <br/>
                    <Link color="inherit" component={RouterLink} to="/privacy">Privacy</Link> <br/>
                    <Link color="inherit" component={RouterLink} to="/sitemap">Sitemap</Link> <br/>
                </Typography>
            </Box>
        </div>
    )
}