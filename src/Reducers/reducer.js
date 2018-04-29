


// const intitodosalState = [{title: 'laundry', done: false}]

const intialState = {
	TODO: []
}

// let index = 0;
export const TodoList = (state = intialState , action) =>{

	console.log('In Reducer',action);
	switch(action.type){

		case 'ADD_TODO':
			return { TODO: state.TODO.concat([{title:action.title, done:false}])};
			break;
		case 'DEL_TODO':

			// console.log(state.TODO)
			// let new_arr = state.TODO.slice(action.index,state.TODO.length)
			// console.log('new arr',new_arr);
			// let old_arr = state.TODO.slice(0,action.index - 1)
			// console.log('old arr',old_arr);
			// console.log('testing',{ TODO : old_arr.concat(new_arr)})
			// return { TODO : old_arr.concat(new_arr)}

			// state.TODO.map((x) => {

			// 	console.log(x);
			// 	if(action.title == x.title){
			// 		console.log(x.title);
			// 		fruits.indexOf("Apple");
			// 	}
			// })
			return  { TODO : state.TODO.filter( z => {return z.title !== action.title} )};
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
