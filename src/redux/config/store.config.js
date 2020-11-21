import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import history from './history.config'
import rootSaga from '../saga/root.saga'
import rootReducer from '../reducers/root.reducer'

const saga = createSagaMiddleware()
const router = routerMiddleware(history)

const middlewares = [saga, router]

let devToolsExtension = f => f

const { createLogger } = require('redux-logger')

const logger = createLogger({
  collapsed: true
})
middlewares.push(logger)

if (window.devToolsExtension) {
  devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__()
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), devToolsExtension)
)

saga.run(rootSaga)

export default store
