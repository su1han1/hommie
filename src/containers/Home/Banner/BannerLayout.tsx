import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundImage: "url(./banner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 666,
        },
        container: {
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
        }
    })
)

interface Props {
    children: React.ReactNode,
}

export default (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src="./banner.png" alt="banner" style={{ display: "none" }} />
            <Container className={classes.container} maxWidth="md">
                {props.children}
            </Container>
        </div>
    )

}