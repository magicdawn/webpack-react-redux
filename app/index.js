import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import store, { history } from './store'
import Root from './containers/Root'

const init = Root => {
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
}
init(Root)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default
    init(NewRoot)
  })
}
