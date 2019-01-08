import { Component } from 'react';
import './todoList.scss';

export class TodoList extends Component {
  state = {
    todos: [],
    filterValue: ''
  }

  originTodos = [];

  componentDidMount() {
    const { tasks } = this.props;
    console.log(tasks);
    this.originTodos = tasks;
    this.setState({
      todos: this.originTodos
    });
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    const filteredTodos = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: filteredTodos
    });
    this.originTodos = filteredTodos;
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
          <ul className="todo-list">
            {
              todos.map((item, index) => (
                <li
                  key={index}
                  className={`todo-item
                    ${item.done ? 'completed' : ''}
                    ${!item.done ? 'inprogress' : ''}
                  `}
                >
                  { item.id }. { item.title } {index + 1}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
