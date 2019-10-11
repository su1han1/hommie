import * as types from './types'

const initState: types.UserState = {
    user: {
        _id: '',
        email: '',
        password: '',
        username: '',
        description: '',
        avatar: '',
        gender: 'male'
    }
}

export const userReducer = (state = initState, action: types.UserActionTypes): types.UserState => {
    switch (action.type) {
        case types.RESPONSE_USER_SIGNOUT:
            return initState
        case types.RESPONSE_USER_INFO:
            return { user: action.userInfo}
        default:
            return state
    }
}

export * from './actions'
export * from './types'