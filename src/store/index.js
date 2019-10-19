import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from '../reducers/reducer'

export default function configureStore() {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const logger = createLogger()

  const store = createStore(reducer, composeEnhancer(applyMiddleware(logger)))

  return store
}
