import { createStore, Middleware, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    // todo add reducers
});

// export type AppState = ReturnType<typeof rootReducer>;
export type AppState = {
    // todo temporary
};

const middleWares: Middleware[] = [
    thunk,
];

export default function configureStore(initialState?: AppState) {
    initialState = Object.assign(
        {

        },
        initialState
    );

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleWares)
    );

    return store;
}