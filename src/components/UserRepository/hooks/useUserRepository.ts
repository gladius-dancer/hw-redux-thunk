import {useAppDispatch, useAppSelector} from "../../../store/store";
import {useState} from "react";
import {fetchRepositories} from "../../../store/asyncActions";

export function useUserRepository() {

    const dispatch = useAppDispatch();
    const [username, setUsername] = useState("");
    const repositories = useAppSelector(state => state.repositories).repositories;
    const loading = useAppSelector(state => state.repositories).loading;
    const error = useAppSelector(state => state.repositories).error;

    const fetchData = () => {
        fetchRepositories(dispatch, username);
    }

    const handleChange = (event: any) => {
        setUsername(event.target.value);
    }

    return {
        username,
        repositories,
        loading,
        error,
        fetchData,
        handleChange
    }
}