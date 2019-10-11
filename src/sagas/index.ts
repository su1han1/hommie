import { all } from 'redux-saga/effects'
import * as user from './user'
import * as house from './house'
import * as admin from './admin'

export default function* rootSaga() {
    yield all([
        user.signInListener(),
        user.signUpListener(),
        user.signOutListener(),
        user.userAuthListener(),
        house.getHouseDetailListener(),
        house.getHouseListListener(),
        admin.deleteHouseSagaListener(),
        admin.getAdminHouseListListener(),
        admin.newHouseSagaListener(),
        admin.updateHouseSagaListener()
    ])
}

export interface ResponseData<T> {
    code: number,
    message: string,
    data: T,
}