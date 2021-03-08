import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: ['a','b','c'],
    };
  }

  addTodo = (entry) => {
    this.setState({
      list: this.state.list.concat(entry),
    });
  }

  clearList = () => {
    this.setState({
      list: [],
    }); 
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list}/>
        <TodoForm addTodo={this.addTodo} clearList={this.clearList}/>
      </div>
    );
  }
}

export default App;
