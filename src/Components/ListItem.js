import React, { useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTodo, toggleTodo, editDescTodo } from '../store/todos/actions';
import '../styles.scss';

const ListItem = (props) => {
  const { todo } = props;
  const { ondeleteTodo, ontoggleTodo, oneditDescTodo } = props;
  const [newDesc, setNewDesc] = useState(todo.description || '');
  const [modalOpen, setModalOpen] = useState(false);

  const changeHandler = (event) => {
    setNewDesc(event.target.value);
  };

  const deleteHandler = () => {
    ondeleteTodo(todo.id);
  };

  const toggleHandler = () => {
    ontoggleTodo(todo.id);
  };

  const editModalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const saveModalHandler = () => {
    oneditDescTodo(todo.id, newDesc);
    setModalOpen(!modalOpen);
  };

  let classNameDesc = 'listItem__description';

  if (todo.completed) {
    classNameDesc += ' listItem__description--completed';
  }
  const editMode = classNames({ none: !modalOpen });
  const notEditMode = classNames({ none: modalOpen });
  const completedTask = classNames({ none: !todo.completed });

  return (
    <div className="listItem">
      <input type="checkbox" checked={todo.completed} onChange={toggleHandler} />
      <i style={{ display: completedTask }}> &#10004;</i>
      <div
        onDoubleClick={editModalHandler}
        className={classNameDesc}
        style={{ display: notEditMode }}
      >
        {todo.description}
      </div>
      <input
        type="text"
        name="newDesc"
        className="listItem__inputmodal"
        value={newDesc}
        onChange={changeHandler}
        style={{ display: editMode }}
      />
      <button
        type="button"
        className="listItem__inputmodal--btnsave"
        onClick={saveModalHandler}
        style={{ display: editMode }}
      >
        Save
      </button>
      <button
        type="button"
        className="listItem__inputmodal--btnclose"
        onClick={editModalHandler}
        style={{ display: editMode }}
      >
        Cancel
      </button>
      <button
        type="button"
        className="listItem__btnclose"
        onClick={deleteHandler}
        style={{ display: notEditMode }}
      >
        X
      </button>
    </div>
  );
};
const mapStateToProps = (store) => ({
  todos: store.todos,
});
const mapDispatchToProps = (dispatch) => ({
  ondeleteTodo: (id) => dispatch(deleteTodo(id)),
  ontoggleTodo: (id) => dispatch(toggleTodo(id)),
  oneditDescTodo: (id, text) => dispatch(editDescTodo(id, text)),

});
ListItem.propTypes = {
  todo: PropTypes.objectOf(Object).isRequired,
  ondeleteTodo: PropTypes.func.isRequired,
  ontoggleTodo: PropTypes.func.isRequired,
  oneditDescTodo: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
