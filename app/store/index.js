import { configureStore } from './configureStore'
export { history } from './configureStore'

const store = configureStore()
export default store

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const reducer = require('../reducers').default
    store.replaceReducer(reducer)
  })
}
