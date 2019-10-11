import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { RouterProps } from 'react-router'
import { Typography, Box } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        width: '100%',
        height: '100vh'
    }
})

interface Props extends RouterProps {}

export default (props: Props) => {
    const classes = useStyles()

    React.useEffect(() => {
        setTimeout(() => {
            props.history.replace('/')
        }, 4000)
        for (let i = 4; i >= 0; i--) {
            setTimeout(() => {
                setCounter(i)
            }, (4 - i) * 1000);
        }
    },[null])

    const [counter, setCounter] = React.useState(4)

    return (
        <div className={classes.root}>
            <img src="/404.png" alt="Not Found"/>
            <Box mt={2}><Typography>{`Back to home in ${counter}s`}</Typography></Box>
        </div>
    )
}