import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      entry: 'qqq',
    };
  }

  handleChange = (e) => {
    this.setState({entry: e.target.value});
  }


  render() {
    return (
      <form>
        <input type='text' name='entry' value={this.state.entry} onChange={this.handleChange}/>
        <input type='button' name='addTodo' value='Add Todo' onClick={_ => this.props.addTodo(this.state.entry)}/>
      </form>
    )
  }
}

export default TodoForm;