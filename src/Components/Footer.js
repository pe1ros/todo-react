import React from "react";
import "../styles.scss";
import PropTypes from "prop-types"; 
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from "../store/constants"

export function Footer(props) {
  const changeFilter = (e) => {
    if (e.target.innerText === "All") {
      props.setFilter(SHOW_ALL);
    }
    if (e.target.innerText === "Active") {
      props.setFilter(SHOW_ACTIVE);
    }
    if (e.target.innerText === "Completed") {
      props.setFilter(SHOW_COMPLETED);
    }
  };
  const clearAllCompleted = () => {
    props.clearCompleted();
  };
  function getItemsStatus(list, flag) {
    const listItems = list.filter((item) => item.completed === flag);
    return listItems;
  }
  
  let countCheckedTodo = 0
  for(let i = 0; i<props.todos.length;i++){
    props.todos[i].completed === true && countCheckedTodo++ 
  }

  let classNames = require("classnames");
  let showFooter = classNames({"flex":props.todos.length, "none":!props.todos.length})
  let borderFilter = classNames("1px solid")
  let clearItems = classNames({"none":!countCheckedTodo })

  return (
    <div className="Footer" style={{ display: showFooter}}>
      <div className="Footer__spanitems">
        <span>
          {getItemsStatus(props.todos, false).length}
          {' '}
          items left
        </span>
      </div>
      <div className="Footer__filter">
        <button style={{ border: props.filter === SHOW_ALL && borderFilter}} onClick={changeFilter}>All</button>
        <button style={{ border: props.filter === SHOW_ACTIVE && borderFilter}} onClick={changeFilter}>Active</button>
        <button style={{ border: props.filter === SHOW_COMPLETED && borderFilter}} onClick={changeFilter}>Completed</button>
      </div>
      <div className="Footer__clearitems">
        <button style={{ display: clearItems}} onClick={clearAllCompleted}>
          Clear completed [
          {getItemsStatus(props.todos, true).length}
          ]
        </button>
      </div>
    </div>
  );
}
Footer.propTypess ={
  todos: PropTypes.array,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
}
export default Footer;
