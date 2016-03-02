// Importação do reducer post que será a base da nossa store Redux
import post from './reducer/post'

// Importação do componente MessageApp, componente principal
import MessageApp from './components/MessageApp'

// Crianção da store do Redux com base no reducer post
const { createStore } = Redux
const store = createStore(post)

// Definição da função render responsável por renderizar a aplicação.
// Nesse caso essa função renderiza o componente MessageApp dentro do elemento cujo id é "container"
// Isso é feito por meio da função render contida no ReactDOM
function render() {
	ReactDOM.render(
		// Aqui passamos por parametro para o nosso component MessageApp tudo que ele precisa para "trabalhar".
		// - title
		/* 
			- messages (Recebe o retorno de getState ou seja, o estado atual retornado pelo reducer, nesse caso
			as mensagens enviadas)
		*/
		// - store (Recebe a store do Redux)
    	<MessageApp title="Message App" messages={store.getState()} store={store} />,
    	document.getElementById('container')
    )
}

// Chamada da função principal de renderização, nossa render function
render()

// O método subscribe da store é responsável por dizer ao Redux qual callback precisa chamar quando algo for alterado.
// ou seja toda vez que algo for modificado no Redux por meio de uma ação a nossa função render será chamada
store.subscribe(render)