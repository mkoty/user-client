import {createStore, compose} from 'redux'
import rootReducer from './reducers'

export default function configureStore() {
    const finalCreateStore = compose(
        typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() :
            f => f
    )(createStore);

    return finalCreateStore(rootReducer)
}
