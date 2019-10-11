import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Box, Typography } from '@material-ui/core';
import PopularSite from './PopularSite';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "space-around",
        },
    })
)

export default () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h3">
                <Box mb={"50px"}>Popular</Box>
            </Typography>
            <Box className={classes.root}>
                <PopularSite image="1" title="Northhills" />
                <PopularSite image="2" title="24 Longview" />
                <PopularSite image="3" title="Riverside" />
                <PopularSite image="4" title="Greystone" />
            </Box>
        </div>
    )
}