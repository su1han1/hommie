export const USER_SIGNIN = 'USER_SIGNIN',
             USER_SIGNUP = 'USER_SIGNUP',
             USER_SIGNOUT = 'USER_SIGNOUT',
             RESPONSE_USER_INFO = 'RESPONSE_USER_INFO',
             RESPONSE_USER_SIGNOUT = 'RESPONSE_USER_SIGNOUT'

export interface SignInAction {
    type: typeof USER_SIGNIN
    email: string
    password: string
}

export interface SignUpAction {
    type: typeof USER_SIGNUP
    user: User
}

export interface SignOutAction {
    type: typeof USER_SIGNOUT
}

export interface ResponseInfoAction {
    type: typeof RESPONSE_USER_INFO
    userInfo: User
}

export interface ResponseUserSignOut {
    type: typeof RESPONSE_USER_SIGNOUT
}

export type UserActionTypes = SignInAction | SignUpAction | SignOutAction | ResponseInfoAction | ResponseUserSignOut

export interface User {
    _id: string
    email: string
    password: string
    username: string
    avatar: string
    gender: 'male' | 'female'
    description: string
}

export interface UserState {
    user: User
}