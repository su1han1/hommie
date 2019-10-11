import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Banner from './Banner'
import HouseForm from './HouseForm'
import { Container } from '@material-ui/core'
import { AppState, HouseItem, UserState, setMsg } from '../../reducers'
import { connect } from 'react-redux'
import { RouterProps } from 'react-router'

const initHouse: HouseItem = {
    _id: '',
    userID:'',
    createDate: new Date(),
    changeDate: new Date(),
    title: '',
    images: [],
    isSublease: 1,
    totalRoom: 1,
    totalBath: 1,
    leaseRoom: 1,
    occuRoom: 0,
    leaseStart: new Date(),
    leaseEnd: new Date(),
    region: '',
    address: '',
    price: 0,
    utilityIncluded: false,
    isNegotiatable: false,
    floorPlan: [
        "Living room",
        "Kitchen"
    ],
    amenities: [
        "Free wifi",
        "In-house laundry",
        "Free gym",
        "Swimming pool",
        "Room delivery",
        "Smoking allowed"
    ],
    facilities: [
        "School shuttle",
        "Convenience store"
    ],
    description: '',
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            paddingTop: 70,
            paddingBottom: 70,
        }
    })
)

interface Props extends RouterProps {
    user: UserState
    setMsg: typeof setMsg
}

const ListHouse = (props: Props) => {
    const classes = useStyles()
    React.useEffect(() => {
        if (props.user.user._id === '') {
            props.history.push('/sign-in')
            props.setMsg('warning', 'Please sign in first')
        }
    }, [props.user.user])
    
    return (
        <div>
            <Banner/>
            <Container maxWidth='md' className={classes.root}>
                <HouseForm initHouse={initHouse} />
            </Container>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    user: state.user
})

export default connect(
    mapStateToProps,
    { setMsg }
)(ListHouse)
