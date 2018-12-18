import { Component } from 'react';
import './todoList.scss';

export class TodoList extends Component {
  state = {
    todos: [],
    initialTodos: [],
    filterValue: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => this.setState({
        todos: todos.slice(0, 20),
        initialTodos: todos.slice(0, 20)
      }));
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    todos.splice(id - 1, 1);
    this.setState({
      todos
    });
  }


  completeTodo = (todoId) => {
    const { todos } = this.state;
    const { completed, ...props } = todos.find(item => item.id === todoId);
    this.setState({
      todos: [
        ...todos.slice(0, todoId - 1),
        { completed: true, ...props },
        ...todos.slice(todoId)]
    });
  }


  startTodo(todoId) {
    const { todos } = this.state;
    const { ...props } = todos.find(item => item.id === todoId);
    this.setState({
      todos: [
        ...todos.slice(0, todoId - 1),
        { inprogress: true, ...props },
        ...todos.slice(todoId)]
    });
  }

  onChange = ({ target }) => {
    this.setState({
      filterValue: target.value
    });
    this.filterTodos(target.value);
  }

  filterTodos = (text) => {
    const { initialTodos } = this.state;
    this.setState({
      todos: initialTodos.filter(item => item.title.includes(text))
    });
  }

  render() {
    const { todos, filterValue } = this.state;
    return (
      <div>
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
