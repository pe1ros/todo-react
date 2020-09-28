import React, { Component } from 'react';
import '../styles.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../store/todos/actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = (e) => {
    const { description } = this.state;
    const { onAddTodo } = this.props;

    e.preventDefault();
    onAddTodo(description);
    this.setState({ description: '' });
  }

  render() {
    const { description } = this.state;
    return (
      <div>
        <form className="AddTodo" action="submit" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="description"
            placeholder="What needs to be done?"
            onChange={this.changeHandler}
            value={description}
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (description) => dispatch(addTodo(description)),

});
AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(AddTodo);
