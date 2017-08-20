import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

// history
export const history = createHistory()

/**
 * middlewares
 */

const middlewares = [
  // routing
  routerMiddleware(history),

  // thunk
  thunk,
]

/**
 * enhancers
 */

const enhancers = [
  // middlewares
  applyMiddleware(...middlewares),
]

/**
 * DevTools
 */

let composeEnhancers = compose

if (
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
}

export function configureStore(initialState) {
  return createStore(rootReducer, initialState, composeEnhancers(...enhancers))
}
