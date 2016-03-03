// Importação do componente Message
import Message from './Message'

/*
	O componente MessageList recebe messages (um array de mensagens [estado retornado da store do Redux])
	e cria uma variável local msgs que armazena os componentes do tipo Message que são criados com base
	nas informações retornadas do array messages, por meio do metodo map.

	Depois que a variável msgs é criada, renderizamos seu valor.
*/
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

export default MessageList