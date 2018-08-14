import React from 'react'

function EDIT(props) {
	return(
		<button className = "_left btn btn-default" id = {props.id} onClick = {props.onClick}>
		    <i id={props.id} className="fa fa-edit"></i>
        </button>
    )
}

export default EDIT