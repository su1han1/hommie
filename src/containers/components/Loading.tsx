import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "absolute",
            zIndex: 999,
            width: '100%',
        }
    })
)

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LinearProgress color="secondary" />
        </div>
    )
}