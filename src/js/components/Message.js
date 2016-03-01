const Message = ({
	name,
  msg
}) => {
	return <div className="message">
  	<h4>{name}</h4>
    <p>{'"' + msg + '"'}</p>
  </div>
}

export default Message