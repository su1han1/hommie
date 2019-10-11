import * as types from './types'

const initState: types.GlobalState = {
    isFetching: false,
    isLoadingList: true,
    msg: {
        type: "success",
        content: "",
        open: false,
    },
}

export const globalReducer = (state = initState, action: types.GlobalActionTypes): types.GlobalState => {
    switch (action.type) {
        case types.START_FETCH:
            return { ...state, isFetching: true }
        case types.END_FETCH:
            return { ...state, isFetching: false }
        case types.START_LOADING_LIST:
            return { ...state, isLoadingList: true}
        case types.END_LOADING_LIST:
            return { ...state, isLoadingList: false}
        case types.SET_MESSAGE:
            return {
                ...state,
                isFetching: false,
                msg: {
                    type: action.msgType,
                    content: action.msgContent,
                    open: action.msgOpen
                }
            }
        default:
            return state
    }
}

export * from './actions'
export * from './types'