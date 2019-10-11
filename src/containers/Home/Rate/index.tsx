import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
        },
    })
)

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5">
                <Box mr={4}>More than <strong>20,000</strong> students choose us!</Box>
            </Typography>
            <Typography variant="h5">
                <Box>Score <strong>8.5</strong> / 10</Box>
            </Typography>
        </div>
    )
}