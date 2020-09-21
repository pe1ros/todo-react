import React, {Component} from "react"
import { connect } from 'react-redux' 
import '../styles.scss'

class ListTodo extends Component{
  constructor(props){
    super(props)
    this.state ={ 
    }
  } 
  render(){ 
    console.log('====================================');
    console.log(this.props.todos);
    console.log('====================================');

    return (
      <div className="listTodo">   
         
      </div>
    )
  }
}
const mapStateToProps = (store) =>{
  return{
    todos: store.todos
  }
}
const mapDispatchToProps = (dispatch) =>{ 
  return{ 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListTodo)