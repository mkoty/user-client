import {createStore, compose} from 'redux'
import rootReducer from './reducers'

export default function configureStore() {
    const finalCreateStore = compose(
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
            window.devToolsExtension() :
            f => f
    )(createStore);

    return finalCreateStore(rootReducer)
}
