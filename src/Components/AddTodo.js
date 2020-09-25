import React, {Component} from "react"
import "../styles.scss"
import { addTodo } from "../store/todos/actions" 
import { connect } from "react-redux"
import PropTypes from "prop-types"; 

class AddTodo extends Component{
  constructor(props){
    super(props)
    this.state ={
      description:"", 
    }
  }
  changeHandler = (e) =>{
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler = (e) =>{
    e.preventDefault()  

    this.props.addTodo( this.state.description ) 
    this.setState({description:""})
 
  }
  render(){
    return (
      <div > 
        <form className="AddTodo" action="submit" onSubmit={this.submitHandler}>
          <input 
            type="text" 
            name="description"
            placeholder="What needs to be done?" 
            onChange={this.changeHandler} 
            value={this.state.description}/> 
        </form>
      </div>
    )
  }
}
const mapStateToProps = (store) =>{
  return{ 
  }
}
const mapDispatchToProps = (dispatch) =>{ 
  return{
    addTodo: (data) => dispatch(addTodo(data))
  }
}
AddTodo.propTypes ={
  addTodo:PropTypes.func,
}
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)