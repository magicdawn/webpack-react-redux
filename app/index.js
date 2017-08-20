import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { configureStore, history } from './store/configureStore'
import Root from './containers/Root'

const init = Root => {
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
}

const store = configureStore()
init(Root)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default
    init(NewRoot)
  })

  module.hot.accept('./reducers', () => {
    const reducer = require('./reducers/index').default
    store.replaceReducer(reducer)
  })
}
