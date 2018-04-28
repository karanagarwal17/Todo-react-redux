
import React from 'react';
import ReactDOM from 'react-dom';


function Input(props) {
	return(<input className = "pad form-control _wid" type = "text" value = {props.value} onChange = {props.onChange} />)
}

export default Input;