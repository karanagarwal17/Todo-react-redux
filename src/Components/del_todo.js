


import React from 'react';
import ReactDOM from 'react-dom';


function DEL(props) {
	// console.log(props);
	return(<button className = " _left btn btn-default"  type = "text" id = {props.id} value = {props.value} onClick = {props.onClick} > X </button>)
}

export default DEL;