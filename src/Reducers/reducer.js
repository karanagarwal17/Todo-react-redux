const intialState = {
	TODO: []
}

export const TodoList = (state = intialState , action) =>{	
	switch(action.type){

		case 'ADD_TODO':
			let _new_array = state.TODO.concat([{title:action.title, done:false}])
			return { TODO: _new_array };
			break;

		case 'DEL_TODO':
			let new_arr, old_arr, new_array;
			if(state.TODO[action.ID].edit){
				old_arr_ = state.TODO.slice(0,action.ID);
				obj_ = [Object.assign({}, state.TODO[action.ID], {edit: false})];
				new_arr_ = state.TODO.slice(action.ID + 1,state.TODO.length);
				new_array = old_arr_.concat(obj_,new_arr_)
			} else {
				new_arr = state.TODO.slice(action.ID + 1,state.TODO.length);
				old_arr = state.TODO.slice(0,action.ID);
				new_array = old_arr.concat(new_arr);
			}
			return  { TODO : new_array };
			break;

		case 'CHECK_TODO':
			let old_arr_, obj_, new_arr_, final_arr;
			if(state.TODO[action.ID].edit){
				old_arr_ = state.TODO.slice(0,action.ID);
				obj_ = [Object.assign({}, state.TODO[action.ID], {edit: false, title: action.value})];
				new_arr_ = state.TODO.slice(action.ID + 1,state.TODO.length);
				final_arr = old_arr_.concat(obj_,new_arr_)
			} else {
				old_arr_ = state.TODO.slice(0,action.ID);
				obj_ = [Object.assign({}, state.TODO[action.ID], {done: true})];
				new_arr_ = state.TODO.slice(action.ID + 1,state.TODO.length);
				final_arr = old_arr_.concat(obj_,new_arr_)
			}
			return  { TODO : final_arr };
			break;

		case 'EDIT_TODO':
			old_arr_ = state.TODO.slice(0,action.ID);
			obj_ = [Object.assign({}, state.TODO[action.ID], {edit: true})];
			new_arr_ = state.TODO.slice(action.ID + 1,state.TODO.length);
			final_arr = old_arr_.concat(obj_,new_arr_)
			return  { TODO : final_arr };
			break;

		default:
			return state;
	}
}