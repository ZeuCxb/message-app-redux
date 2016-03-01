import Message from './Message'

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