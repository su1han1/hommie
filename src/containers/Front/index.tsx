import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../Home"
import ListHouse from "../ListHouse"
import SearchHousing from "../SearchHousing"
import HouseDetail from "../HouseDetail"
import LogEntry from "../LogEntry"
import UpdateHouse from "../UpdateHouse"
import { Loading, Notification, Navbar, NotFound} from '../components'
import { AppState, GlobalState, userAuth } from '../../reducers'
import { connect } from 'react-redux'


interface Props {
    global: GlobalState
    userAuth: typeof userAuth
}

const Front = (props: Props) => {
    const { isFetching } = props.global
    React.useEffect(() => {
        props.userAuth()
    }, [null])
    return(
            <div>
                <Navbar/>
                {isFetching && <Loading />}
                <Notification />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/house/list-house/" component={ListHouse} />
                    <Route exact path="/house/detail/:id" component={HouseDetail} />
                    <Route exact path="/house/detail/:id/edit" component={UpdateHouse} />
                    <Route exact path="/search-housing" component={SearchHousing} />
                    <Route exact path="/sign-in" component={LogEntry} />
                    <Route exact path="/sign-up" component={LogEntry} />
                    <Route component={NotFound} /> 
                </Switch>
            </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    global: state.global
})

export default connect(
    mapStateToProps,
    { userAuth }
)(Front)