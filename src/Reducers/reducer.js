


// const intitodosalState = [{title: 'laundry', done: false}]

const intialState = {
	TODO: []
}

// let index = 0;
export const TodoList = (state = intialState , action) =>{

	console.log('In Reducer',action);
	
	switch(action.type){

		case 'ADD_TODO':
			let _new_array = state.TODO.concat([{title:action.title, done:false}])
			return { TODO: _new_array };
			break;

		case 'DEL_TODO':

			let new_arr = state.TODO.slice(action.ID + 1,state.TODO.length);
			let old_arr = state.TODO.slice(0,action.ID);

			// let new_array = state.TODO.filter( z => {return z.title !== action.title} );

			let new_array = old_arr.concat(new_arr);
			return  { TODO : new_array };
			break;

		default:
			return state;

	}

}

/*

return [...state.slice(0, action.index), 
        Object.assign({}, state[action.index], {done: true}),
        ...state.slice(action.index + 1)]


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


*/
