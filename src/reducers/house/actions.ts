import * as types from './types'

export const getHouseList = (pageNum: number, bedNum: number[], bathNum: number[], price: number[]): types.HouseActionTypes => ({
    type: types.GET_HOUSE_LIST,
    pageNum: pageNum,
    bedNum: bedNum,
    bathNum: bathNum,
    price: price
})

export const getHouseDetail = (id: string): types.HouseActionTypes => ({
    type: types.GET_HOUSE_DETAIL,
    id: id
})

export const responseHouseList = (newHouseList: types.HouseItem[]): types.HouseActionTypes => ({
    type: types.RESPONSE_HOUSE_LIST,
    newHouseList: newHouseList
})

export const responseHouseDetail = (houseDetail: types.HouseItem): types.HouseActionTypes => ({
    type: types.RESPONSE_HOUSE_DETAIL,
    houseDetail: houseDetail
})

export const resetHouseList = (): types.HouseActionTypes => ({
    type: types.RESET_HOUSE_LIST
})

export const setHouseListEnd = (): types.HouseActionTypes => ({
    type: types.SET_HOUSE_LIST_END
})