import {Nullable} from "../../type/NullableType";

export type ReepositoryType = {
    repositories: any[],
    loading: boolean,
    error: Nullable<string>,
}

const initialState: ReepositoryType = {
    repositories: [],
    loading: false,
    error: null,
};

const FETCH_REPOSITORY_REQUEST = "FETCH_REPOSITORY_REQUEST";
const FETCH_REPOSITORY_SUCCESS = "FETCH_REPOSITORY_SUCCESS";
const FETCH_REPOSITORY_FAILURE = "FETCH_REPOSITORY_FAILURE";


export const repositoryReducer = (state = initialState, action: any): ReepositoryType => {
    switch (action.type) {
        case FETCH_REPOSITORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_REPOSITORY_SUCCESS:
            return {
                ...state,
                repositories: action.payload,
                loading: false,
            };
        case FETCH_REPOSITORY_FAILURE:
            return {
                ...state,
                repositories: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export const repositoriesFetch = () => ({type: FETCH_REPOSITORY_REQUEST});
export const repositoriesFetchSuccess = (payload: any) => ({type: FETCH_REPOSITORY_SUCCESS, payload});
export const repositoriesFetchFailure = (payload: any) => ({type: FETCH_REPOSITORY_FAILURE, payload});
