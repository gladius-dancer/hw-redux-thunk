import React from 'react';
import {useUserRepository} from "./hooks/useUserRepository";

function UserRepository() {

    const {username, repositories, loading, error, fetchData, handleChange} = useUserRepository();

    return (
        <div>
            <span>Type github login:</span>
            <input type="text" value={username} onChange={handleChange}/>
            <button onClick={() => fetchData()}>Get</button>

            {
                loading && !error ?
                    <p>Loading...</p> :
                    !loading && error ?
                        <p>User not found</p> :
                        <ul>
                            {repositories?.map((item) => (
                                <li key={item.id}> {item.full_name} </li>
                            ))}
                        </ul>
            }
        </div>

    );
}

export default UserRepository;