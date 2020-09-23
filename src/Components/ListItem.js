import React, {Component} from "react" 
import { connect } from 'react-redux' 
import { deleteTodo,toggleTodo } from "../redux/pageActions" 
import '../styles.scss'

class ListItem extends Component{  
  constructor(props){
    super(props)
    this.state ={
      newDesc: this.props.todo.description || '',
      modalOpen:false,
    }
  }
  changeHandler =(e) =>{
    this.setState({[e.target.name]:e.target.value})
  }
  deleteHandler = (e) =>{
    e.preventDefault()
    this.props.deleteTodo(this.props.todo.id)
  }
  toggleHandler = (e) =>{
    this.props.toggleTodo(this.props.todo.id)
  }
  editModalHandler = (e) =>{
    this.setState({modalOpen:!this.state.modalOpen})
    //this.props.editDescTodo(this.props.todo.id, 'desc')
  }
  saveModalHandler = (e) =>{
    this.setState({modalOpen:!this.state.modalOpen})
    this.props.editDescTodo(this.props.todo.id, this.state.newDesc)
  }
  render(){  
    let classNameDesc = "listItem__description";
    if(this.props.todo.completed){
      classNameDesc+= '--completed'
    } 
    return (
      <div className="listItem">  
        <input type='checkbox' checked={this.props.todo.completed} onChange={this.toggleHandler}/> 
        <div 
          onDoubleClick={this.editModalHandler} 
          className={classNameDesc}
          style={{display: this.state.modalOpen ? 'none' : "block"}}>
          {this.props.todo.description}
        </div>
        <input 
        type='text' 
        name='newDesc' 
        className="listItem__inputmodal"
        value={this.state.newDesc}
        onChange={this.changeHandler} 
        style={{display: this.state.modalOpen ? 'block' : "none"}}/>  
        <button 
        className="listItem__inputmodal--btnsave" 
        onClick={this.saveModalHandler}
        style={{display: this.state.modalOpen ? 'block' : "none"}}>Save</button>
        <button 
        className="listItem__inputmodal--btnclose" 
        onClick={this.editModalHandler}
        style={{display: this.state.modalOpen ? 'block' : "none"}}>Cancel</button>

        <button 
        className="listItem__btnclose" 
        onClick={this.deleteHandler}
        style={{display: this.state.modalOpen ? 'none' : ""}}>X</button>
      </div>)
  }
}
  
// const mapStateToProps = (store) =>{
//   return{
//     todos: store.todos
//   }
// }
// const mapDispatchToProps = (dispatch) =>{ 
//   return{ 
//     deleteTodo:(id)=>dispatch(deleteTodo(id)),
//     toggleTodo:(id)=>dispatch(toggleTodo(id))
//   }
// }
export default ListItem