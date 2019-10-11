import React from 'react';
import { Divider, CircularProgress, Typography } from "@material-ui/core"
import Filterbar from './HouseFilterbar'
import HouseResult from './HouseResult'
import { AppState, HouseListState, GlobalState, getHouseList, resetHouseList } from '../../reducers'
import { connect } from 'react-redux'

interface State {
    bed: number[]
    bath: number[]
    price: number[]
}

interface Props {
    getHouseList: typeof getHouseList
    resetHouseList: typeof resetHouseList
    houseList: HouseListState
    global: GlobalState
}

const SearchHouse = (props: Props) => {
    // get house list when component mounted
    React.useEffect(() => {
        props.resetHouseList()
        props.getHouseList(0, values.bed, values.bath, values.price)
    }, [null])
    React.useEffect(() => {
        // listen if page arrives end. If so, get new house list
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [props.houseList])
    // set house search state
    const [values, setValues] = React.useState<State>({
        bed: [1, 6],
        bath: [1, 6],
        price: [0, 2000]
    })
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
        setValues({ ...values, [prop]: newValue as number[] })
    }
    const handleSubmit = () => {
        props.resetHouseList()
        props.getHouseList(0, values.bed, values.bath, values.price)
    }
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight && !props.houseList.isEnd) {
            props.getHouseList(props.houseList.houseList.length, values.bed, values.bath, values.price)
        }
    }

    return (
        <div>
            <Filterbar values={values} handleChange={handleChange} handleSubmit={handleSubmit} />
            <Divider/>
            <HouseResult getHouseList={props.getHouseList} houseList={props.houseList} />
            {props.global.isLoadingList && 
                <CircularProgress color='secondary' />
            }
            {props.houseList.isEnd && 
                <div style={{display: 'flex', justifyContent: 'center', color: 'rgba(0,0,0,0.4)', marginBottom: 30}}>
                    <Typography>-- THAT'S ALL --</Typography>
                </div>
            }
        </div>
        
    )
}

const mapStateToProps = (state: AppState) => ({
    houseList: state.house.houseList,
    global: state.global
})

export default connect(
    mapStateToProps,
    { getHouseList, resetHouseList }
)(SearchHouse)