import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import { globalReducer } from './global'
import { userReducer } from './user'
import { houseReducer } from './house'
import { adminReducer } from './admin'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
    global: globalReducer,
    user: userReducer,
    house: houseReducer,
    admin: adminReducer,
    router: connectRouter(history)
})

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [sagaMiddleware]
    // @ts-ignore
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const middleWareEnhancer = composeEnhancers(
        applyMiddleware(routerMiddleware(history), ...middlewares),
    )

    const store = createStore(rootReducer, middleWareEnhancer)
    sagaMiddleware.run(rootSaga)
    return store
}
export type AppState = ReturnType<typeof rootReducer>

export * from './admin'
export * from './house'
export * from './user'
export * from './global'