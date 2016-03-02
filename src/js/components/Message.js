/*
	O componente Message é o responsável pela exibição da mensagem,
	ele basicamente recebe um nome (name) e uma mensage (msg) e
	retorna o elemento que deve ser exibido.
*/
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