import post from './reducer/post'

import MessageApp from './components/MessageApp'

const { createStore } = Redux
const store = createStore(post)

function render() {
	ReactDOM.render(
    <MessageApp title="Message App" messages={store.getState()} store={store} />,
    document.getElementById('container')
  )
}

render()
store.subscribe(render)