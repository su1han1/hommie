import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Banner from './Banner'
import HouseForm from './HouseForm'
import { Container } from '@material-ui/core'
import { AppState, GlobalState, HouseDetailState, getHouseDetail, UserState, setMsg } from '../../reducers'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            paddingTop: 70,
            paddingBottom: 70,
        }
    })
)

interface Props extends RouteComponentProps<{id: string}> {
    user: UserState
    global: GlobalState
    houseDetail: HouseDetailState
    setMsg: typeof setMsg
    getHouseDetail: typeof getHouseDetail
}

const UpdateHouse = (props: Props) => {
    const classes = useStyles()
    const id = props.match.params.id
    React.useEffect(() => {
        if (props.houseDetail.house._id !== id) {
            props.getHouseDetail(id)
        }
        
    },[null])
    // const initHouse = Object.assign({}, props.houseDetail.house)
    
    return (
        <div>
            {!props.global.isFetching && props.houseDetail.house._id !== '' &&
                <div>
                    <Banner />
                    <Container maxWidth='md' className={classes.root}>
                        <HouseForm initHouse={props.houseDetail.house} />
                    </Container>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    user: state.user,
    houseDetail: state.house.houseDetail,
    global: state.global
})

export default connect(
    mapStateToProps,
    { setMsg, getHouseDetail }
)(UpdateHouse)
