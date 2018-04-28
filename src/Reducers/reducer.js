


// const intitodosalState = [{title: 'laundry', done: false}]

const intialState = {
	TODO: []
}

export const TodoList = (state = intialState , action) =>{

	console.log(state);
	switch(action.type){

		case 'ADD_TODO':
			let modified_arr = state.TODO.concat([action.title]);
			return { TODO: modified_arr};
			break;
		default:
			return state;

	}

}

/*

return [...state.slice(0, action.index), 
        Object.assign({}, state[action.index], {done: true}),
        ...state.slice(action.index + 1)]


*/
