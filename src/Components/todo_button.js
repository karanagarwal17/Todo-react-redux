import React from 'react'

function TODO(props){
	return(
		<button className='btn btn-default _btn' onClick = {props.handleClick}>ADD TODO</button>
	)
}

export default TODO