import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            width: 220,
            alignItems: "left",
            "& img": {
                width: 214,
                height: 214,
            }
        },
    })
)

interface Props {
    image: string,
    title: string,
}

export default (props: Props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box mb={1}><img src={`./popular-${props.image}.png`} alt={props.title} /></Box>
            <Typography variant="h4">
                <Box>{props.title}</Box>
            </Typography>
        </Box>
    )
}