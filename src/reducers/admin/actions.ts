import * as types from './types'
import { HouseItem } from '../house/types'

export const getAdminHouseList = (userID: string, pageNum: number): types.AdminActionTypes => ({
    type: types.GET_ADMIN_HOUSE_LIST,
    userID: userID,
    pageNum: pageNum
})

export const newHouse = (house: HouseItem): types.AdminActionTypes => ({
    type: types.NEW_HOUSE,
    newHouse: house,
})

export const updateHouse = (house: HouseItem): types.AdminActionTypes => ({
    type: types.UPDATE_HOUSE,
    updatedHouse: house,
})

export const deleteHouse = (houseID: string): types.AdminActionTypes => ({
    type: types.DELETE_HOUSE,
    houseID: houseID,
})

export const responseAdminHouseList = (houseList: HouseItem[]) => ({
    type: types.RESPONSE_ADMIN_HOUSE_LIST,
    houseList: houseList
})

export const resetAdminHouseList = () => ({
    type: types.RESET_ADMIN_HOUSE_LIST
})