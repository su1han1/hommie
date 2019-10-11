import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundImage: 'url(/sign-in-banner.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: 334,
            width: '100%',
            paddingTop: 76,
        },
        hero: {
            width: '100%',
            textAlign: 'center',
            color: '#fff',
        }
    })
)

interface Props {
    path: string
}

export default (props: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img src="/sign-in-banner.png" alt="banner" style={{display: 'none'}}/>
            <Typography variant='h1' className={classes.hero}>
                {props.path === '/sign-in' && <span>Welcome Back!</span>}
                {props.path === '/sign-up' && <span>Welcome to us!</span>}
            </Typography>
        </div>
    )
}