import React from 'react';
import '../styles.scss';
import PropTypes from 'prop-types';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../store/constants';

export function Footer(props) {
  const {
    todos, filter, setFilter, clearCompleted,
  } = props;
  const changeFilter = (e) => {
    if (e.target.innerText === 'All') {
      setFilter(SHOW_ALL);
    }
    if (e.target.innerText === 'Active') {
      setFilter(SHOW_ACTIVE);
    }
    if (e.target.innerText === 'Completed') {
      setFilter(SHOW_COMPLETED);
    }
  };
  const clearAllCompleted = () => {
    clearCompleted();
  };
  function getItemsStatus(list, flag) {
    const listItems = list.filter((item) => item.completed === flag);
    return listItems.length;
  }
  let countCheckedTodo = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      // eslint-disable-next-line no-plusplus
      countCheckedTodo++;
    }
  }
  // eslint-disable-next-line global-require
  const classNames = require('classnames');
  const showFooter = classNames({ flex: todos.length, none: !todos.length });
  const borderFilter = classNames('1px solid');
  const clearItems = classNames({ none: !countCheckedTodo });
  const itemsLeft = getItemsStatus(todos, false);
  const completedItems = getItemsStatus(todos, true);
  return (
    <div className="Footer" style={{ display: showFooter }}>
      <div className="Footer__spanitems">
        <span>
          {itemsLeft}
          {' '}
          items left
        </span>
      </div>
      <div className="Footer__filter">
        <button
          type="button"
          style={{ border: filter === SHOW_ALL && borderFilter }}
          onClick={changeFilter}
        >
          All
        </button>
        <button
          type="button"
          style={{ border: filter === SHOW_ACTIVE && borderFilter }}
          onClick={changeFilter}
        >
          Active
        </button>
        <button
          type="button"
          style={{ border: filter === SHOW_COMPLETED && borderFilter }}
          onClick={changeFilter}
        >
          Completed
        </button>
      </div>
      <div className="Footer__clearitems">
        <button
          type="button"
          style={{ display: clearItems }}
          onClick={clearAllCompleted}
        >
          Clear completed [
          {completedItems}
          ]
        </button>
      </div>
    </div>
  );
}
Footer.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};
export default Footer;
