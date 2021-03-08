import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      entry: '',
    };
  }

  handleChange = (e) => {
    this.setState({entry: e.target.value});
  }


  render() {
    return (
      <form>
        <input type='text' name='entry' value={this.state.entry} onChange={this.handleChange}/>
        <input type='button' value='Add Todo' onClick={_ => this.props.addTodo(this.state.entry)}/>
        <input type='button' value='Clear Completed' onClick={_ => this.props.clearList()} />
      </form>
    )
  }
}

export default TodoForm;