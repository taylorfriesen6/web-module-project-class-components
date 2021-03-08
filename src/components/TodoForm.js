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
      </form>
    )
  }
}

export default TodoForm;