import { Component } from 'react';
import './todoList.scss';
  
export class TodoList extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos: todos.slice(0, 20) }));
  }

  deleteTodo = (id, tId) => {
    const { todos } = this.state;
    if(id !== tId) {
      tId = id;
    }
    todos.splice(tId - 1, 1);
    this.setState({
      todos
    });
    console.log(id, tId);
  }


  completeTodo = (todoId, tId) => {
    const { todos } = this.state;

    const { completed, ...props } = todos.find(item => item.id === todoId);

    this.setState({
      todos: [
        ...todos.slice(0, todoId - 1),
        { completed: true, ...props },
        ...todos.slice(todoId)]
    });
  }


  startTodo(todoId, tId) {
    const { todos } = this.state;

    const { ...props } = todos.find(item => item.id === todoId);
    console.log(todoId, tId);
    this.setState({
      todos: [
        ...todos.slice(0, todoId - 1),
        { inprogress: true, ...props },
        ...todos.slice(todoId)]
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <ul className="todo-list">
        {
          todos.map((todo, index) => (
            <li
              key={index}
              className={`
              todo-item
              ${todo.completed ? 'completed' : ''}
              ${todo.inprogress ? 'inprogress' : ''}
              `}
            >
              { todo.id }. { todo.title } {index + 1}
              <span className="todo-actions">
                <button
                  title="Delete"
                  className="btn-warning"
                  onClick={() => this.deleteTodo(index + 1, todo.id)}
                  type="button"
                >
                  X
                </button>
                <button
                  title="Set as done"
                  className="btn-success"
                  onClick={() => this.completeTodo(index + 1, todo.id)}
                  type="button"
                >
                  V
                </button>
                <button
                  title="Set as in progress"
                  className="btn-primary"
                  onClick={() => this.startTodo(index + 1, todo.id)}
                  type="button"
                >
                  ~
                </button>
              </span>
            </li>
          ))
        }
      </ul>
    );
  }
}
