import React from 'react';
import {useUserRepository} from "./hooks/useUserRepository";
import "./UserRepository.scss";

function UserRepository() {

    const {username, repositories, loading, error, fetchData, handleChange} = useUserRepository();

    return (
        <div className="repository">
            <div className="repository-header">
                <span>Type github login:</span>
                <input type="text" value={username} onChange={handleChange}/>
                <button onClick={() => fetchData()}>Get</button>
            </div>


            {
                loading && !error ?
                    <p>Loading...</p> :
                    !loading && error ?
                        <p>User not found</p> :
                        <ul>
                            {repositories?.map((item) => (
                                <li key={item.id}><a href={item.html_url}>{item.full_name}</a></li>
                            ))}
                        </ul>
            }
        </div>

    );
}

export default UserRepository;