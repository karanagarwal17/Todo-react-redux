
import React from 'react';
import ReactDOM from 'react-dom';

function TODO(props){
	return(
		<button onClick = {props.handleClick}> ADD TODO</button>
	)
}

export default TODO;