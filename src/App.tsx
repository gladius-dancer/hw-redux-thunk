import React from 'react';
import './App.css';
import UserRepository from "./components/UserRepository/UserRepository";
import {Provider} from 'react-redux';
import store from './store/store';

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <UserRepository/>
            </div>
        </Provider>
    );
}

export default App;
