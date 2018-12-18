import { TodoList } from '../todoList';
import './welcome.scss';

export class Welcome extends Component {
  state = {
    userName: 'Oksana Blonskaya',
    tasks: 10,
    done: 3,
    inprogress: 1,
    waiting: 5
  }

  render() {
    const {
      userName,
      tasks,
      done,
      inprogress,
      waiting
    } = this.state;
    return (
      <div className="welcome">
        <h2>Welcome {userName}</h2>
        <div className="tasks-info">
          <div>You have <strong>{tasks} tasks</strong></div>
          <div>Done: <strong>{done}</strong></div>
          <div>In progress: <strong>{inprogress}</strong></div>
          <div>Waiting: <strong>{waiting}</strong></div>
        </div>
        <div>
          <a href="/task-list">Go to the task list</a>
        </div>
        <br />
        <TodoList />
      </div>
    );
  }
}
