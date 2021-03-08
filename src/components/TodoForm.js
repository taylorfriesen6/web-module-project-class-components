import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      entry: '',
    };
  }

  handleChange = e => {
    this.setState({entry: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.entry);
    this.setState({
      entry: '',
    });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='entry' value={this.state.entry} onChange={this.handleChange}/>
        <input type='submit' value='Add Todo'/>
        <input type='button' value='Clear Completed' onClick={_ => this.props.clearList()} />
      </form>
    )
  }
}

export default TodoForm;