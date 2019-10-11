export const GET_HOUSE_LIST = 'GET_HOUSE_LIST',
             GET_HOUSE_DETAIL = 'GET_HOUSE_DETAIL',
             RESPONSE_HOUSE_LIST = 'RESPONSE_HOUSE_LIST',
             RESPONSE_HOUSE_DETAIL = 'RESPONSE_HOUSE_DETAIL',
             RESET_HOUSE_LIST = 'RESET_HOUSE_LIST',
             SET_HOUSE_LIST_END = 'SET_HOUSE_LIST_END'

export interface GetHouseListAction {
    type: typeof GET_HOUSE_LIST
    pageNum: number
    bedNum: number[]
    bathNum: number[]
    price: number[]
}

export interface GetHouseDetailAction {
    type: typeof GET_HOUSE_DETAIL
    id: string
}

export interface ResponseHouseListAction {
    type: typeof RESPONSE_HOUSE_LIST
    newHouseList: HouseItem[]
}

export interface ResponseHouseDetailAction {
    type: typeof RESPONSE_HOUSE_DETAIL
    houseDetail: HouseItem
}

export interface ResetHouseList {
    type: typeof RESET_HOUSE_LIST
}

export interface SetHouseListEnd {
    type: typeof SET_HOUSE_LIST_END
}

export type HouseActionTypes = GetHouseListAction | GetHouseDetailAction | ResponseHouseListAction | ResponseHouseDetailAction | ResetHouseList | SetHouseListEnd

export interface HouseItem {
    _id: string,
    userID: string,
    createDate: Date,
    changeDate: Date,
    images: string[],
    title: string,
    description: string,
    isSublease: 0 | 1,
    leaseStart: Date,
    leaseEnd: Date,
    region: string,
    address: string,
    totalRoom: number,
    totalBath: number,
    leaseRoom: number,
    occuRoom: number,
    price: number,
    utilityIncluded: boolean,
    isNegotiatable: boolean,
    floorPlan: string[],
    amenities: string[],
    facilities: string[],
}

export interface HouseListState {
    houseList: HouseItem[],
    isEnd: boolean
}

export interface HouseDetailState {
    house: HouseItem
}