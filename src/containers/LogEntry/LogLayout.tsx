import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

interface Props {
    children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: 500,
            height: 500,
            top: -167,
            marginBottom: -167,
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0px 0px 30px rgba(150, 150, 150, 0.25)',
            borderRadius: 15,
        },
    })
)

export default (props: Props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            { props.children }
        </div>
    )
}