import Title from './Title'
import Post from './Post'
import MessageList from './MessageList'

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