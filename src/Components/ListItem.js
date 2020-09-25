import React, {Component} from "react" 
import { connect } from "react-redux" 
import { deleteTodo,toggleTodo,editDescTodo } from "../store/todos/actions" 
import "../styles.scss"
import PropTypes from "prop-types"; 

class ListItem extends Component{  
  constructor(props){
    super(props)
    this.state ={
      newDesc: this.props.todo.description || "",
      modalOpen:false,
    }
  }
  changeHandler = (e) =>{
    this.setState({newDesc: e.target.value})
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
  }
  saveModalHandler = (e) =>{
    this.setState({modalOpen:!this.state.modalOpen})
    this.props.editDescTodo(this.props.todo.id, this.state.newDesc)
  }
  
  render(){ 
    let classNames = require('classnames');
    let classNameDesc = "listItem__description";
    if(this.props.todo.completed){
      classNameDesc+= " listItem__description--completed"
    } 
    let editMode = classNames({'none':!this.state.modalOpen})
    let notEditMode = classNames({'none':this.state.modalOpen})
    let completedTask = classNames({'none':!this.props.todo.completed})
    return (
      <div className="listItem">  
        <input type="checkbox" checked={this.props.todo.completed} onChange={this.toggleHandler}/>
        <i style={{display: completedTask}}> &#10004;</i>
        <div 
          onDoubleClick={this.editModalHandler} 
          className={classNameDesc}
          style={{display: notEditMode}}
          >
          {this.props.todo.description}
        </div>
        <input 
          type="text" 
          name="newDesc" 
          className="listItem__inputmodal"
          value={this.state.newDesc}
          onChange={this.changeHandler} 
          style={{display: editMode}}/>  
        <button 
          className="listItem__inputmodal--btnsave" 
          onClick={this.saveModalHandler}
          style={{display: editMode}}
          >
          Save
        </button>
        <button 
          className="listItem__inputmodal--btnclose" 
          onClick={this.editModalHandler}
          style={{display: editMode}}
          >
          Cancel
        </button>
        <button 
          className="listItem__btnclose" 
          onClick={this.deleteHandler}
          style={{display: notEditMode}}
          >
          X
        </button>
      </div>)
  }
}
  
const mapStateToProps = (store) =>{
  return{
  }
}

const mapDispatchToProps = (dispatch) =>{ 
  return{  
    deleteTodo:(id)=>dispatch(deleteTodo(id)),
    toggleTodo:(id)=>dispatch(toggleTodo(id)),
    editDescTodo:(id,text)=>dispatch(editDescTodo(id,text))

  }
}
ListItem.propTypes = {
  todo: PropTypes.object,
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  editDescTodo: PropTypes.func,
}
export default connect(mapStateToProps,mapDispatchToProps)(ListItem)
