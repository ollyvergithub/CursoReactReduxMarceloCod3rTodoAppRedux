import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import fieldReducer from "./fieldReducer";

import Field from "./field";

const reducers = combineReducers({
    //field: () => ({ value: 'Opa' })
    // Atualizando os dados Pelo Reducer que está em fieldReducer
    field: fieldReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
, document.getElementById('app'))