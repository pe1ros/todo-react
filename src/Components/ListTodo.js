import React from 'react';
import '../styles.scss';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import AddTodo from './AddTodo';

const ListTodo = (props) => {
  const { todos } = props;
    <div className="listTodo">
      <AddTodo />

      {todos && todos.map((todo, index) => (
        <ListItem
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          todo={todo}
        />
      ))}
    </div>;
};

ListTodo.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
};

export default ListTodo;
