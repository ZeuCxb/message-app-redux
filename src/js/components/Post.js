/*
  O componente Post é o "mais complexo" da aplicação,
  ele recebe a store do Redux e é responsável por chamar a ação SAVE do reducer.
*/
class Post extends React.Component {
  // O constructor é o método responsável por iniciar nosso componente
  constructor(props) {
    super(props)
    this.store = props.store
  }

  /*
    O metodo send captura os elementos name e msg usando refs,
    verifica se estão vazios, se não estiverem, chama o método dispatch da store
    que é o responsável por fazer a chamada da função no reducer.
  */
	send(e) {
  	e.preventDefault()
    
    let name = this.refs.name
    let msg = this.refs.msg
    
    if(name.value != '' && msg.value != '') {
      this.store.dispatch({ type: 'SAVE', data: {name: name.value, msg: msg.value} })
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