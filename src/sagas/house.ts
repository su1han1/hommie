import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { startFetch, endFetch, startLoadingList, endLoadingList, setMsg } from '../reducers/global/actions'
import { responseHouseList, responseHouseDetail, setHouseListEnd } from '../reducers/house/actions'
import { GET_HOUSE_LIST, GetHouseListAction, GetHouseDetailAction, GET_HOUSE_DETAIL, HouseItem } from '../reducers/house/types'
import { ResponseData } from './'
import { push } from 'connected-react-router'

export function* getHouseListSaga (action: GetHouseListAction) {
    yield put(startLoadingList())
    try {
        const response = yield axios.get(`/api/house?pageNum=${action.pageNum}&minBed=${action.bedNum[0]}&maxBed=${action.bedNum[1]}&minBath=${action.bathNum[0]}&maxBath=${action.bathNum[1]}&minPrice=${action.price[0]}&maxPrice=${action.price[1]}`).catch((err) => { console.log(err) })
        const responseData: ResponseData<HouseItem[]> = response.data
        if (responseData.code === 0) {
            if (responseData.data.length === 0) yield put(setHouseListEnd())
            else yield put(responseHouseList(responseData.data))
        } else yield put(setMsg('error', responseData.message))
    }
    catch (err) {
        console.log(err)
        yield put(setMsg('error', 'Server Error'))
    }
    finally {
        yield put(endLoadingList())
    }
}

export function* getHouseListListener () {
    yield takeLatest(GET_HOUSE_LIST, getHouseListSaga)
}

export function* getHouseDetailSaga(action: GetHouseDetailAction) {
    yield put(startFetch())
    try {
        const response = yield axios.get(`/api/house/detail?id=${action.id}`)
        const responseData: ResponseData<HouseItem> = response.data
        if (responseData.code === 0) yield put(responseHouseDetail(responseData.data))
        else {
            yield put(setMsg('error', responseData.message))
            yield put(push('/search-house'))
        }
    }
    catch (err) {
        console.log(err)
        yield put(push('/404'))
        yield put(setMsg('error', 'Server Error'))
    }
    finally {
        yield put(endFetch())       
    }
}

export function* getHouseDetailListener() {
    yield takeLatest(GET_HOUSE_DETAIL, getHouseDetailSaga)
}