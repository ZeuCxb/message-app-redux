// Criação do reducer post
/*
  Um reducer é a lógica que funciona dentro da store do Redux, ou seja,
  um reducer é o responsavel por receber chamada da ação e o estado atual
  executar a ação desejada e retornar o "novo" estado.
*/
function post(state = [], action) {
  // Aqui fazemos um switch passando o tipo da ação para assim decidir o que deve ser feito
  switch (action.type) {
    /*
      A ação SAVE deve pegar o nome e a mensagem contido em action
      e retornar um estado contendo esses novos valores
    */
    case 'SAVE':
    	let name = action.data.name
      let msg = action.data.msg
      
      return [
      	...state,
        {
        	name,
          msg
        }
      ]
    default:
      return state
  }
}

export default post