import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Typography, Box, Paper, Link, Button } from '@material-ui/core'
import { MailOutline, FavoriteBorder, CheckCircleOutline } from '@material-ui/icons'
import clsx from 'clsx'
import { Link as RouterLink } from 'react-router-dom'

interface Props {
    price: number,
    leaseStart: Date,
    leaseEnd: Date,
    utilityIncluded: boolean,
    isNegotiatable: boolean,
    url: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 20,
            marginLeft: 50,
            width: '100%',
        },
        priceContainer: {
            padding: "20px 30px"
        },
        priceLine: {
            display: 'flex',
        },
        price: {
            flexGrow: 1,
        },
        moveInDate: {
            border: '1px solid #A6A6A6',
            borderRadius: 4,
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom:10,
        },
        inlineIcon: {
            position: 'relative',
            top: 7,
            marginRight: 3,
            color: '#1FB39C',
        },
        requestButton: {
            border: '2px solid #1FB39C',
            borderRadius: 4,
            cursor: 'pointer',
            textAlign: 'center',
            padding: "5px 0",
        },
        requested: {
            backgroundColor: '#1FB39C',
            color: '#fff',
        },
        notRequested: {
            color: '#1FB39C',
        },
        editButton: {
            margin: '30px auto',
            width: '60%',
            '& a:hover': {
                textDecoration: 'none',
            }
        }
    })
)

export default (props: Props) => {
    const classes = useStyles()
    const [isRequested, setRequested] = React.useState(false)

    const handleClick = () => {
        setRequested(true)
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.priceContainer}>
                <Box className={classes.priceLine} mb={2}>
                    <Box className={classes.price}>
                        <Typography variant='h3' component='span'>{`$${props.price} `}</Typography>/room
                    </Box>
                    <MailOutline />
                    <FavoriteBorder />
                </Box>
                <Box mb={2}>
                    <Typography style={{ fontSize: 16, color: "#828282" }}>Moving Date</Typography>
                    <Box className={classes.moveInDate} pt={.5} pb={.5}>
                        <Typography variant='body2' style={{fontSize:17}}>{`${dateToString(new Date(props.leaseStart))} ~ ${dateToString(new Date(props.leaseEnd))}`}</Typography>
                    </Box>
                </Box>
                {props.utilityIncluded &&
                    <Box>
                        <Typography><CheckCircleOutline className={classes.inlineIcon} />Utility included</Typography>
                    </Box>
                }
                {props.isNegotiatable &&
                    <Box>
                        <Typography><CheckCircleOutline className={classes.inlineIcon} />Rent Price Negotiatable</Typography>
                    </Box>
                }
                <Box 
                    className={clsx(classes.requestButton, isRequested ? classes.requested : classes.notRequested)} 
                    onClick={handleClick} 
                    mt={2} mb={2}>
                    {isRequested ? "Sent a request!" : "Request more info"}
                </Box>
                <Typography style={{ fontSize: 16, color: "#828282" }}>You won’t be charged now</Typography>
            </Paper>
            <div className={classes.editButton}>
                <Link component={RouterLink} to={`${props.url}/edit`} >
                    <Button variant='outlined' color='primary'>EDIT THIS POST</Button>
                </Link>
            </div>
        </div>
    )
}

const dateToString = (date: Date): string | undefined => {
    const reg = /\D{3} \d{2} \d{4}/
    let regArray = reg.exec(date.toString())
    if (regArray !== null) return regArray[0].split(' ').join('/') 
}