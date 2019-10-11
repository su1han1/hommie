import * as types from './types'

const adminHouseListInitState: types.AdminHouseListState = {
    houseList: [],
}

export const adminReducer = (state = adminHouseListInitState, action: types.AdminActionTypes): types.AdminHouseListState => {
    switch (action.type) {
        case types.RESPONSE_ADMIN_HOUSE_LIST:
            let newHouseList = state.houseList.concat(action.houseList)
            return { houseList: newHouseList }
        case types.RESET_ADMIN_HOUSE_LIST:
            return adminHouseListInitState
        default:
            return state
    }
}

export * from './actions'
export * from './types'