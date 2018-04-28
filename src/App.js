import React, { Component } from 'react';
import './App.css';
import {addTodo} from './Action_Creators/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TODO from './Components/todo_button';
import Input from './Components/input_title';

class App extends Component {

constructor(){
	super();
	this.state = {
		input_value:''
	}
}

  componentDidMount(){
  	console.log(this);
  } 

  change(event){
  	this.setState({
  		input_value:event.target.value
  	})
  }

  handleClick(e){
  	console.log('moti iloveu',this.props.TODO_ARRAY);
  	this.props.addTodo(this.state.input_value);
  }
  
  render() {
    return (
      <div className="App">

      	<h1> A TO-DO Application </h1>

      	<Input className = "pad" value = {this.state.input_value} onChange = {(e) => {this.change(e)}} />

        <TODO className = "pad" handleClick = {(e) => {this.handleClick(e)}}/>
        
        <ul className = "_ul">
         {this.props.TODO_ARRAY.map(function(listValue){
            return <li key = {listValue}>{listValue}</li>;
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
  return bindActionCreators({ addTodo }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
