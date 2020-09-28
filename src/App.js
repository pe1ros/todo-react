import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import ListTodo from './Components/ListTodo';
import { deleteTodo, toggleTodo, clearCompleted } from './store/todos/actions';
import { setFilter } from './store/filter/actions';
import { getVisibleTodos } from './selectors/index';

const App = (props) => {
  const {
    todosFiltred, todos, filter, setFilter, clearCompleted,
  } = props;
  return (
    <div className="App">
      <Header />
      <div className="App__list">
        <ListTodo
          todos={todosFiltred}
        />
        <Footer
          todos={todos}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
          filter={filter}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  todosFiltred: getVisibleTodos(store),
  todos: store.todoReducer.todos,
  filter: store.filterReducer.filter,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  setFilter: (filter) => dispatch(setFilter(filter)),
  clearCompleted: () => dispatch(clearCompleted()),
});

App.propTypes = {
  filter: PropTypes.string.isRequired,
  todos: PropTypes.instanceOf(Array).isRequired,
  todosFiltred: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
