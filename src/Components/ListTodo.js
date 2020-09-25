import React, { Component } from "react";
import "../styles.scss";
import ListItem from "./ListItem";
import AddTodo from "./AddTodo";
import PropTypes from "prop-types"; 

class ListTodo extends Component {
  render() {
     
    return (
      <div className="listTodo">
        <AddTodo />
        
        {this.props.todos && this.props.todos.map((todo, index) => (
          <ListItem
            key={index}
            todo={todo}
          />
        ))}
      </div>
    );
  }
}
ListTodo.propTypes = {
  todos: PropTypes.array,
}

export default ListTodo;
