import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Box, Typography } from '@material-ui/core';
import Instruction from './Instruction';

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
                <Box mb={"50px"}>How It Works</Box>
            </Typography>
            <Box className={classes.root}>
                <Instruction image="1" title="Set up" description="Explain what's unique, show off with photos, and set the right price" />
                <Instruction image="2" title="Search" description="Through roommate matching system" />
                <Instruction image="3" title="Chat" description="Discuss, negotiate and decide" />
                <Instruction image="4" title="Match" description="Match your best house and roommate finally" />
            </Box>
        </div>
    )
}