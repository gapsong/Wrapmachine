import {
    applyMiddleware,
    compose,
    createStore
} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, promise, logger))
    );

    if (module.hot) {
        module.hot.accept('../reducers/index', () => {
            var nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
