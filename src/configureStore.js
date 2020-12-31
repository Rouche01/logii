import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


const configureStore = (preloadedState) => {

    const middleware = applyMiddleware(thunk);

    const store = createStore(rootReducer, preloadedState, middleware);
    return store;
}


export default configureStore;