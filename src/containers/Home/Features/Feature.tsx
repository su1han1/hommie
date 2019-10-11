import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            width: 220,
            alignItems: "center",
            "& img": {
                width: 130,
                height: 130,
            }
        },
    })
)

interface Props {
    image: string,
    title: string,
    description: string,
}

export default (props: Props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box mb={6}><img src={`./home-${props.image}.png`} alt={props.title} /></Box>
            <Box>
                <Typography variant="h4">
                    <Box mb={1}>{props.title}</Box>
                </Typography>
                <Typography>{props.description}</Typography>
            </Box>
        </Box>
    )
}