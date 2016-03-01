function post(state = [], action) {
  switch (action.type) {
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