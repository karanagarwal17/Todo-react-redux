
import React from 'react';
import ReactDOM from 'react-dom';


function CHECK(props) {
	return(
			<button className = " _left btn btn-default" id = {props.id} onClick = {props.onClick} >
				<i id = {props.id} className="fa fa-check"></i>
			</button>)
}

export default CHECK;