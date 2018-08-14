
import React, { Component } from 'react'
import './App.css'

// Importing Action Creators
import {addTodo} from './Action_Creators/add_todo_action'
import {checkTodo} from './Action_Creators/check_todo_action'
import {deleteTodo} from './Action_Creators/delete_todo_action'
import {editTodo} from './Action_Creators/edit_todo_action'

// Importing Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Importing Components
import TODO from './Components/todo_button'
import ADD from './Components/add_todo'
import DEL from './Components/del_todo'
import CHECK from './Components/check_todo'
import EDIT from './Components/edit_todo'

class App extends Component {
  constructor(){
  	super()
  	this.state = {
      input_value: '',
      edit_value: ''
  	}
  }

  checkTODO(e){
    let id = parseInt(e.target.id, 10)
    this.props.checkTodo(id, this.state.edit_value)
  }

  editTODO(e){
    let id = parseInt(e.target.id, 10)
    this.props.editTodo(id)
  }

  deleteTODO(e){
    let id = parseInt(e.target.id, 10)
    this.props.deleteTodo(id)
  }

  change(event){
  	this.setState({
  		input_value: event.target.value
  	})
  }

  edit(event){
    this.setState({
      edit_value: event.target.value
    })
  }

  handleClick_with_keypress_(e){
    if(this.state.input_value == '')
      return

    if (e.charCode === 13) {
      this.props.addTodo(this.state.input_value)
    }
  }

  handleClick_without_keypress_(e){
    if(this.state.input_value == ''){
      return
    }
    this.props.addTodo(this.state.input_value)    
  }
  
  render() {
    return (
      <div className="App">
      	<h1> A TO-DO Application </h1>
      	<ADD className = "pad" value = {this.state.input_value} onKeyPress = {(e) => {this.handleClick_with_keypress_(e)}} onChange = {(e) => {this.change(e)}} />
        <TODO className = "pad" handleClick = {(e) => {this.handleClick_without_keypress_(e)}}/>
        <ul className = "_ul">
          {this.props.TODO_ARRAY.map((listValue,index) => {
            if(listValue.done){
              return(
                <div id = {index}>
                  <li key={index} className = "_font_check" > {listValue.title}
                    <DEL id = {index} onClick = {(e) => {this.deleteTODO(e)}} />
                    <CHECK id = {index} onClick = {(e)=>{this.checkTODO(e)}}/>
                  </li>
                </div>
              )
            } else if(listValue.edit){
              return(
                <div id = {index}>
                  <li key={index} className = "_font" > 
                    <input value={this.state.edit_value || listValue.title} onChange={(e) => {this.edit(e)}} />   
                    <DEL id = {index} onClick = {(e) => {this.deleteTODO(e)}} />
                    <CHECK id = {index} onClick = {(e)=>{this.checkTODO(e)}}/>
                  </li>
                </div>
              )
            } else{
              return(
                <div id = {index}>
                  <li key={index} className = "_font" > {listValue.title} 
                    <DEL id = {index} onClick = {(e) => {this.deleteTODO(e)}} />
                    <CHECK id = {index} onClick = {(e)=>{this.checkTODO(e)}}/>
                    <EDIT id = {index} onClick = {(e)=>{this.editTODO(e)}} />
                  </li>
                </div>
              )
            }
          })}
         </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		'TODO_ARRAY': state.TODO
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTodo, deleteTodo, checkTodo, editTodo }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App)