import {applyMiddleware, createStore, combineReducers, Reducer} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {repositoryReducer, ReepositoryType} from "./reducers/repositoryReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

type RootReducerType = {
    repositories: ReepositoryType
}

const rootReducer = combineReducers<RootReducerType>({
    repositories: repositoryReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;