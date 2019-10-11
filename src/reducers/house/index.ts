import * as types from './types'
import { combineReducers } from 'redux'

const houseListInitState: types.HouseListState = {
    houseList: [],
    isEnd: false
}

const houseDetailInitState: types.HouseDetailState = {
    house: {
        _id: '',
        userID: '',
        createDate: new Date(),
        changeDate: new Date(),
        images: [],
        title: '',
        description: '',
        isSublease: 1,
        leaseStart: new Date(),
        leaseEnd: new Date(),
        region: '',
        address: '',
        totalRoom: 1,
        totalBath: 1,
        leaseRoom: 1,
        occuRoom: 0,
        price: NaN,
        utilityIncluded: false,
        isNegotiatable: false,
        floorPlan: [],
        amenities: [],
        facilities: [],
    }
}

export const houseListReducer = (state = houseListInitState, action: types.HouseActionTypes): types.HouseListState => {
    switch (action.type) {
        case types.RESPONSE_HOUSE_LIST:
            let newHouseList = state.houseList.concat(action.newHouseList)
            return { ...state, houseList: newHouseList }
        case types.RESET_HOUSE_LIST:
            return houseListInitState
        case types.SET_HOUSE_LIST_END:
            return {...state, isEnd: true}
        default:
            return state
    }
}

export const houseDetailReducer = (state = houseDetailInitState, action: types.HouseActionTypes): types.HouseDetailState => {
    switch (action.type) {
        case types.RESPONSE_HOUSE_DETAIL:
            return { house: action.houseDetail }
        default:
            return state
    }
}

export const houseReducer = combineReducers({
    houseList: houseListReducer, 
    houseDetail: houseDetailReducer
})

export * from './actions'
export * from './types'