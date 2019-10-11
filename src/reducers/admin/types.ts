import { HouseItem } from '../house/types'

export const GET_ADMIN_HOUSE_LIST = 'GET_ADMIN_HOUSE_LIST',
             NEW_HOUSE = 'NEW_HOUSE',
             UPDATE_HOUSE = 'UPDATE_HOUSE',
             DELETE_HOUSE = 'DELETE_HOUSE',
             RESPONSE_ADMIN_HOUSE_LIST = 'RESPONSE_ADMIN_HOUSE_LIST',
             RESET_ADMIN_HOUSE_LIST = 'RESET_ADMIN_HOUSE_LIST'

export interface GetAdminHouseListAction {
    type: typeof GET_ADMIN_HOUSE_LIST,
    userID: string,
    pageNum: number,
}

export interface NewHouseAction {
    type: typeof NEW_HOUSE,
    newHouse: HouseItem,
}

export interface UpdateHouseAction {
    type: typeof UPDATE_HOUSE,
    updatedHouse: HouseItem,
}

export interface DeleteHouseAction {
    type: typeof DELETE_HOUSE,
    houseID: string,
}

export interface ResponseAdminHouseList {
    type: typeof RESPONSE_ADMIN_HOUSE_LIST
    houseList: HouseItem[]
}

export interface ResetAdminHouseList {
    type: typeof RESET_ADMIN_HOUSE_LIST
}

export type AdminActionTypes = GetAdminHouseListAction | NewHouseAction | UpdateHouseAction | DeleteHouseAction | ResponseAdminHouseList | ResetAdminHouseList

export interface AdminHouseListState {
    houseList: HouseItem[],
}
