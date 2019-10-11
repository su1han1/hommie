import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import BannerLayout from "./BannerLayout"
import { Typography, Box, Button } from '@material-ui/core';
import { Link as RouterLink } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonsContainer: {
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "space-around",
            paddingTop: 25,
            paddingBottom: 25,
            borderRadius: 10,
        },
        bannerButton: {
            backgroundColor: "#fff",
            width: "27%",
            paddingTop: 15,
            paddingBottom: 15,
            fontWeight: 300,
            "&:hover": {
                backgroundColor: "#fff",
            },
            "& img": {
                marginRight: 11,
                marginBottom: 2,
                width: 28,
                height: 28,
            }
        }
    })
)

export default () => {
    const classes = useStyles();

    return (
        <BannerLayout>
            <Typography variant="h1" color="textSecondary">
                <Box mb={3}> Find your perfect housing & roommate today </Box>
            </Typography>
            <Typography variant="h2" color="textSecondary">
                <Box mb={8}>
                    Please tell us about <br />
                    your current purpose
                </Box>
            </Typography>
            <Box className={classes.buttonsContainer}>
                <Button component={RouterLink} to="/search-housing" className={classes.bannerButton} disableRipple><img src="./home.png" alt="home-icon"/>Search Housing</Button>
                {/* <Button className={classes.bannerButton} disableRipple><img src="./avatar.png" alt="avatar-icon"/>Search Roommates</Button> */}
                <Button component={RouterLink} to="/house/list-house" className={classes.bannerButton} disableRipple><img src="./list.png" alt="list-icon"/>List My Place</Button>
            </Box>
        </BannerLayout>
    )
}