
import React from 'react';
import ReactDOM from 'react-dom';


function DEL(props) {
	// console.log(props);
	return(<button className = " _left btn btn-default"  type = "text" id = {props.id} value = {props.value} onClick = {props.onClick} ><i className="fa fa-close"></i></button>)
}

export default DEL;