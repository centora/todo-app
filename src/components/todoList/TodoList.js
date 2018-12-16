import { Component } from 'react';
import './todoList.scss';
  
export class TodoList extends Component {
  state = {
    list: [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: true
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: 'fugiat veniam minus',
        completed: false
      },
    ]
  }

  render() {
    const { list } = this.state;
    return (
      <ul className="todo-list">
        {
          list.map(todo => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              { todo.id }. { todo.title }
            </li>
          ))
        }
      </ul>
    );
  }
}
