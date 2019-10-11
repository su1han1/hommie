import * as types from './types'

export const startFetch = (): types.GlobalActionTypes => ({
    type: types.START_FETCH
})

export const endFetch = (): types.GlobalActionTypes => ({
    type: types.END_FETCH
})

export const startLoadingList = (): types.GlobalActionTypes => ({
    type: types.START_LOADING_LIST
})

export const endLoadingList = (): types.GlobalActionTypes => ({
    type: types.END_LOADING_LIST
})

export const clearMsg = (): types.GlobalActionTypes => {
    return {
        type: types.SET_MESSAGE,
        msgType: "success",
        msgContent: '',
        msgOpen: false,
    }
}

export const userAuth = (): types.GlobalActionTypes => {
    return {
        type: types.USER_AUTH,
    }
}

export const setMsg = (msgType: "success" | "error" | "warning" | "info", msgContent: string): types.GlobalActionTypes => {
    return {
        type: types.SET_MESSAGE,
        msgType: msgType,
        msgContent: msgContent,
        msgOpen: true
    }
}

