/*
	O componente Title, simplesmente recebe como children (<Title>valor</Title>)
	um valor e renderiza dentro de um h3.
*/
const Title = ({
	children
}) => {
	return <h3>
  	{children}
  </h3>
}

export default Title