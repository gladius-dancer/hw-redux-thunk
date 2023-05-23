import axios from 'axios';
import {repositoriesFetch, repositoriesFetchFailure, repositoriesFetchSuccess} from "./reducers/repositoryReducer";

export const fetchRepositories = async (dispatch: any, username: string) => {
    dispatch(repositoriesFetch());

    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`)
        dispatch(repositoriesFetchSuccess(response.data));
    } catch (error: any) {
        dispatch(repositoriesFetchFailure(error.message));
    }
};