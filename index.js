const counter = (state = [], action) => {
  switch (action.type) {
    case 'SAVE':
    	let name = action.data.name
      let msg = action.data.msg
      
      return [
      	...state,
        {
        	name,
          msg
        }
      ]
    default:
      return state;
  }
}

const { createStore } = Redux
const store = createStore(counter)

const Title = ({
	children
}) => {
	return <h3>
  	{children}
  </h3>
}

class Post extends React.Component {
	send(e) {
  	e.preventDefault()
    
    let name = this.refs.name
    let msg = this.refs.msg
    
    if(name.value != '' && msg.value != '') {
      store.dispatch({ type: 'SAVE', data: {name: name.value, msg: msg.value} })
      
      u('.error').text('');
      
      name.value = '';
      msg.value = '';
    } else {
    	u('.error').text('Preencha todos os campos');
    }
  }
  
  render() {
    return <form>
    	<h4 className="error"></h4>
    
      <p>
        <input ref="name" placeholder="Name..." />
      </p>

      <p>
        <textarea ref="msg" placeholder="Message..."></textarea>
       </p>
      <button onClick={this.send.bind(this)}>Send</button>
    </form>
  }
}

const Message = ({
	name,
  msg
}) => {
	return <div className="message">
  	<h4>{name}</h4>
    <p>{'"' + msg + '"'}</p>
  </div>
}

const MessageList = ({
	messages
}) => {
  	let msgs = messages.map((data, cont) => {
      return <Message key={cont} name={data.name} msg={data.msg} />
    })
  
    return <div>
      {msgs}
    </div>
}

const MessageApp = ({
	title,
  messages
}) => {
	return <div>
  	<Title>{title}</Title>
    <Post />
    <MessageList messages={messages} />
  </div>
}

function render() {
	ReactDOM.render(
    <MessageApp title="Message App" messages={store.getState()} />,
    document.getElementById('container')
  )
}

render()
store.subscribe(render)