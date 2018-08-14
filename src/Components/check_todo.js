import React from 'react'

function CHECK(props){
	return(
		<button className = " _left btn btn-default" id = {props.id} onClick = {props.onClick} >
			<i id = {props.id} className="fa fa-check"></i>
		</button>
	)
}

export default CHECK