


import React from 'react';
import ReactDOM from 'react-dom';


function DEL(props) {
	return(
		<button className = " _left btn btn-default" id = {props.id} onClick = {props.onClick} >
		 <i id = {props.id} className="fa fa-close"></i>
		</button>)
}

export default DEL;