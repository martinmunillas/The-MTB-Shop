import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import reducer from './redux/reducers'
import App from './routes/App'
import initialState from './initialState'

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('app'))