import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Feature from "./Feature"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            // height: 440,
            justifyContent: "space-around",
            paddingTop: 100,
            paddingBottom: 100,
        },
    })
)

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Feature 
                image="privacy"
                title="Privacy Protect System"
                description="Security payment and confidence guarantee. Your personal info is safe with us."
            />
            <Feature 
                image="match"
                title="Smart Match System"
                description="We value everyone and try our best to find your perfect match house and roommates."
            />
            <Feature 
                image="integrated"
                title="Integrated Platform"
                description="From housing, roommate finding to sublease, we cover every scenario you can imagine."
            />
            <Feature 
                image="comforts"
                title="All the Comforts"
                description="From search to decision, the whole process is easy and reliable."
            />
        </div>
    )    
}