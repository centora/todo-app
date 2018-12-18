import { Component } from 'react';
import './todoList.scss';

export class TodoList extends Component {
  state = {
    todos: [],
    filterValue: ''
  }

  originTodos = [];

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((todos) => {
        this.originTodos = todos.slice(0, 20);
        this.setState({
          todos: this.originTodos
        });
      });
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  completeTodo = (todoId) => {
    const { todos } = this.state;
    const item = todos.find(item => item.id === todoId);
    item.completed = true;
    this.setState({
      todos: [...todos]
    });
  }

  startTodo(todoId) {
    const { todos } = this.state;
    const item = todos.find(item => item.id === todoId);
    if (!item.completed) {
      item.inprogress = true;
    }
    this.setState({
      todos: [...todos]
    });
  }

  onChange = ({ target }) => {
    this.setState({
      filterValue: target.value
    });
    this.filterTodos(target.value);
  }

  filterTodos = (text) => {
    this.setState({
      todos: this.originTodos.filter(item => item.title.includes(text))
    });
  }

  render() {
    const { todos, filterValue } = this.state;
    return (
      <div className="todo-container">
        <div>
          <input
            type="text"
            name="filter"
            placeholder="Filter"
            value={filterValue}
            onChange={this.onChange}
          />
        </div>
        <ul className="todo-list">
          {
            todos.map((todo, index) => (
              <li
                key={todo.id}
                className={`todo-item
                ${todo.completed ? 'completed' : ''}
                ${todo.inprogress ? 'inprogress' : ''}
              `}
              >
                { todo.id }. { todo.title } {index + 1}
                <span className="todo-actions">
                  <button
                    title="Delete"
                    className="btn-warning"
                    onClick={() => this.deleteTodo(todo.id)}
                    type="button"
                  >
                    X
                  </button>
                  <button
                    title="Set as done"
                    className="btn-success"
                    onClick={() => this.completeTodo(todo.id)}
                    type="button"
                  >
                    V
                  </button>
                  <button
                    title="Set as in progress"
                    className="btn-primary"
                    onClick={() => this.startTodo(todo.id)}
                    type="button"
                  >
                    ~
                  </button>
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
