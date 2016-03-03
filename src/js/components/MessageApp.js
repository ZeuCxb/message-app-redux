// Importação dos componentes necessários (Title, Post, MessageList)
import Title from './Title'
import Post from './Post'
import MessageList from './MessageList'

/*
	MessageApp é o componente principal do nosso projeto,
	ele age básicamente como um template, sendo o responsável por
	chamar (renderizar) os outros componentes e passar para eles as
	propriedades necessárias.
*/
const MessageApp = ({
	title,
	messages,
	store
}) => {
	return <div>
  	<Title>{title}</Title>
    <Post store={store} />
    <MessageList messages={messages} />
  </div>
}

export default MessageApp