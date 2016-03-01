class Post extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
  }

	send(e) {
  	e.preventDefault()
    
    let name = this.refs.name
    let msg = this.refs.msg
    
    if(name.value != '' && msg.value != '') {
      this.store.dispatch({ type: 'SAVE', data: {name: name.value, msg: msg.value} })
      
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

export default Post