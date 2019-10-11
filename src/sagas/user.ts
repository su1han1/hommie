import { takeLatest, put } from 'redux-saga/effects'
import { push, goBack } from 'connected-react-router'
import axios from 'axios'
import { startFetch, endFetch, setMsg } from '../reducers/global/actions'
import { USER_AUTH } from '../reducers/global/types'
import { responseUserInfo, responseUserSignOut } from '../reducers/user/actions'
import { USER_SIGNIN, USER_SIGNUP, SignInAction, SignUpAction, User, USER_SIGNOUT } from '../reducers/user/types'
import { ResponseData } from './'

export function* signInSaga(action: SignInAction) {
    yield put(startFetch())
    const response = yield axios.post('/api/user/signin', {email: action.email, password: action.password})
        .catch(() => {
            setMsg('error', 'Server Error')
        })
    yield put(endFetch())
    const responseData: ResponseData<User> = response.data
    if (responseData.code === 0) {
        yield put(setMsg('success', responseData.message))
        yield put(responseUserInfo(responseData.data))
        yield put(goBack())
    } else yield put(setMsg('error', responseData.message))
    
}

export function* signInListener() {
    yield takeLatest(USER_SIGNIN, signInSaga)
}

export function* signUpSaga(action: SignUpAction) {
    yield put(startFetch())
    const response = yield axios.post('/api/user/signup', { newUser: action.user })
        .catch(() => {
            setMsg('error', 'Server rror')
        })
    yield put(endFetch())
    const responseData: ResponseData<User> = response.data
    if (responseData.code === 0) {
        yield put(setMsg('success', responseData.message))
        yield put(responseUserInfo(responseData.data))
        yield put(push('/'))
    } else yield put(setMsg('error', responseData.message))
}

export function* signUpListener() {
    yield takeLatest(USER_SIGNUP, signUpSaga)
}

export function* signOutSaga() {
    yield put(startFetch())
    const response = yield axios.get('/api/user/signout')
        .catch(() => {
            setMsg('error', 'Server Error')
        })
    yield put(endFetch())
    const responseData: ResponseData<User> = response.data
    if (responseData.code === 0) {
        yield put(responseUserSignOut())
        yield put(setMsg('success', responseData.message))
        yield put(push('/'))
    } else yield put(setMsg('error', responseData.message))
}

export function* signOutListener() {
    yield takeLatest(USER_SIGNOUT, signOutSaga)
}

export function* userAuthSaga() {
    yield put(startFetch())
    const response = yield axios.get('/api/user/signin')
        .catch(() => {
            setMsg('error', 'Server Error')
        })
    yield put(endFetch())
    const responseData: ResponseData<User> = response.data
    if (responseData.code === 0) {
        yield put(responseUserInfo(responseData.data))
    }
}

export function* userAuthListener() {
    yield takeLatest(USER_AUTH, userAuthSaga)
}