import React from 'react'

function ADD(props) {
	return(
		<input className = "pad form-control _wid" onKeyPress = {props.onKeyPress} type = "text" value = {props.value} onChange = {props.onChange} />
	)
}

export default ADD