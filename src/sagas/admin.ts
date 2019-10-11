import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { startFetch, endFetch, startLoadingList, endLoadingList, setMsg } from '../reducers/global/actions'
import * as adminTypes from '../reducers/admin/types'
import * as adminActions from '../reducers/admin/actions'
import { HouseItem } from '../reducers/house/types'
import { ResponseData } from './'
import { push } from 'connected-react-router'

export function* getAdminHouseListSaga (action: adminTypes.GetAdminHouseListAction) {
    yield put(startLoadingList())
    const response = yield axios.get(`/api/admin/house?pageNum=${action.pageNum}&userID=${action.userID}`)
    yield put(endLoadingList())
    const responseData: ResponseData<HouseItem[]> = response.data
    if (responseData.code === 0) yield put(adminActions.responseAdminHouseList(responseData.data))
    else yield put(setMsg('error', responseData.message))
}

export function* getAdminHouseListListener () {
    yield takeLatest(adminTypes.GET_ADMIN_HOUSE_LIST, getAdminHouseListSaga)
}

export function* newHouseSaga (action: adminTypes.NewHouseAction) {
    yield put(startFetch())
    const response = yield axios.post('/api/admin/house', {newHouse: action.newHouse})
    const responseData: ResponseData<HouseItem> = response.data
    if (responseData.code === 0) {
        yield put(setMsg('success', responseData.message))
        yield put(push(`/house/detail/${responseData.data._id}`))
    } else yield put(setMsg('error', responseData.message))
    yield put(endFetch())
}

export function* newHouseSagaListener() {
    yield takeLatest(adminTypes.NEW_HOUSE, newHouseSaga)
}

export function* updateHouseSaga (action: adminTypes.UpdateHouseAction) {
    yield put(startFetch())
    const response = yield axios.put('/api/admin/house', {updatedHouse: action.updatedHouse})
    const responseData: ResponseData<HouseItem> = response.data
    if (responseData.code === 0) {
        yield put(setMsg('success', responseData.message))
        yield put(push(`/house/detail/${responseData.data._id}`))
    } else yield put(setMsg('error', responseData.message))
    yield put(endFetch())
}

export function* updateHouseSagaListener() {
    yield takeLatest(adminTypes.UPDATE_HOUSE, updateHouseSaga)
}

export function* deleteHouseSaga(action: adminTypes.DeleteHouseAction) {
    yield put(startFetch())
    const response = yield axios.delete(`/api/admin/house?houseID=${action.houseID}`)
    const responseData: ResponseData<HouseItem> = response.data
    if (responseData.code === 0) {
        yield put(setMsg('success', responseData.message))
        yield put(push(`/search-housing`))
    } else yield put(setMsg('error', responseData.message))
    yield put(endFetch())
}

export function* deleteHouseSagaListener() {
    yield takeLatest(adminTypes.DELETE_HOUSE, deleteHouseSaga)
}