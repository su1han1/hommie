import * as types from './types'

export const signIn = (email: string, password: string): types.UserActionTypes => ({
    type: types.USER_SIGNIN,
    email: email,
    password: password,
})

export const signUp = (user: types.User): types.UserActionTypes => ({
    type: types.USER_SIGNUP,
    user: user
})

export const signOut = (): types.UserActionTypes => ({
    type: types.USER_SIGNOUT
})

export const responseUserInfo = (newUserInfo: types.User): types.UserActionTypes => ({
    type: types.RESPONSE_USER_INFO,
    userInfo: newUserInfo
})

export const responseUserSignOut = (): types.UserActionTypes => ({
    type: types.RESPONSE_USER_SIGNOUT
})