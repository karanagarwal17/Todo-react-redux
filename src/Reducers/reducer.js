


// const intitodosalState = [{title: 'laundry', done: false}]

const intialState = {
	TODO: []
}

export const TodoList = (state = intialState , action) =>{

	console.log(state);
	switch(action.type){

		case 'ADD_TODO':
			return { TODO: state.TODO.concat([{title:action.title, done:false}])};
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
