export const START_FETCH = "START_FETCH",
             END_FETCH = "END_FETCH",
             START_LOADING_LIST = 'START_LOADING_LIST',
             END_LOADING_LIST = 'END_LOADING_LIST',
             SET_MESSAGE = "SET_MESSAGE",
             USER_AUTH = "USER_AUTH",
             ADMIN_AUTH = "ADMIN_AUTH"

interface StartFetchAction {
    type: typeof START_FETCH,
}

interface EndFetchAction {
    type: typeof END_FETCH,
}

interface StartLoadingListAction {
    type: typeof START_LOADING_LIST,
}

interface EndLoadingListAction {
    type: typeof END_LOADING_LIST,
}

interface SetMsgAction {
    type: typeof SET_MESSAGE,
    msgType: "success" | "error" | "warning" | "info",
    msgContent: string,
    msgOpen: boolean,
}

interface UserAuthAction {
    type: typeof USER_AUTH,
}

interface AdminAuthAction {
    type: typeof ADMIN_AUTH
}

export interface GlobalState {
    isFetching: boolean,
    isLoadingList: boolean,
    msg: {
        type: "success" | "error" | "warning" | "info",
        content: string,
        open: boolean,
    },
};

export type GlobalActionTypes = StartFetchAction | EndFetchAction | SetMsgAction | UserAuthAction | StartLoadingListAction | EndLoadingListAction;