// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <p>{this.props.list}</p>
    )
  }
}

export default TodoList;