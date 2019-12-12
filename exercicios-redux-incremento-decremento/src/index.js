import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from "./counter";
import counterReduces from "./counterReduces";

const reducers = combineReducers({
    counter: counterReduces
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>
, document.getElementById('app'))