import React, { Component } from 'react';
import './App.css';
import {addTodo,deleteTodo} from './Action_Creators/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TODO from './Components/todo_button';
import ADD from './Components/add_todo';
import DEL from './Components/del_todo';
import CHECK from './Components/check_todo';


class App extends Component {

constructor(){
	super();
	this.state = {
		input_value:''
	}
}

  deleteTODO(e){

    let id = parseInt(e.target.id, 10);
    this.props.deleteTodo(id);
  }

  change(event){

  	this.setState({
  		input_value:event.target.value
  	})
  }

  handleClick(e){
    if(this.state.input_value == '')
      return;

    if (e.charCode === 13) {
      this.props.addTodo(this.state.input_value);
    }
  	
  }

  handleClick_without_keypress_(e){
    if(this.state.input_value == '')
      return;

      this.props.addTodo(this.state.input_value);    
  }

  console(){
    console.log('hey!!');
  }
  
  render() {
    return (
      <div className="App">

      	<h1> A TO-DO Application </h1>

      	<ADD className = "pad" value = {this.state.input_value} onKeyPress = {(e) => {this.handleClick(e)}} onChange = {(e) => {this.change(e)}} />    
        <TODO className = "pad" handleClick = {(e) => {this.handleClick_without_keypress_(e)}}/>
        <ul className = "_ul">
         {this.props.TODO_ARRAY.map((listValue,index) => {

            return(
               <div id = {index}>
                  <li key={index} className = "_font" > {listValue.title} 
                    <DEL value = {listValue.title} id = {index} onClick = {(e) => {this.deleteTODO(e)}} />
                    <CHECK />
                  </li>
               </div>
               )
          })}
         </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

	return{
		'TODO_ARRAY':state.TODO
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTodo,deleteTodo }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

