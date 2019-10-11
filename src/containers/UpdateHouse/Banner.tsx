import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 190,
            background: 'linear-gradient(354.91deg, rgba(105, 152, 209, 0.6) 0%, rgba(73, 167, 216, 0.6) 34.38%, rgba(20, 183, 196, 0.6) 62.7%, rgba(31, 179, 156, 0.6) 100%);'
        },
        content: {
            width: '100%',
            textAlign: 'center',
            color: '#fff',
        },
    })
)

export default () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Box>
                <Typography variant='h1' className={classes.content}>Update Your Place</Typography>
                <Typography variant='body2' className={classes.content}>Let other users find and live in your place</Typography>
            </Box>
        </div>
    )
}