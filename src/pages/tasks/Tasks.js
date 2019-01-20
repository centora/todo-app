import './tasks.scss';
import { getTasks } from '../../services';
import { Tabs, Tab } from '../../components/tabs';

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const date = new Date();
const currDay = date.getDay();

class Tasks extends Component {
  state = {
    days: []
  };

  componentDidMount() {
    getTasks()
      .then(days => this.setState({ days }));
  }

  render() {
    const { days } = this.state;
    if (days.length) {
      const sunday = days.shift();
      days.push(sunday);
      return (
        <>
          <Tabs selectedIndex={currDay}>
            {
              days.map((tasks, index) => (
                <Tab title={weekDays[index]} key={index}>
                  <ol className="todo-list">
                    {
                      tasks.map((item, ind) => (
                        <li
                          key={item.id}
                          className={`todo-item
                          ${'done' in item && item.done ? 'completed' : ''}
                          ${'done' in item && !item.done ? 'inprogress' : ''}
                        `}
                        >
                          <span className="value">{ind + 1}. <span className="value-text">{item.title}</span></span>
                          { !item.done && (
                            <span className="todo-actions">
                              <button
                                title="Delete"
                                className="btn-warning"
                                type="button"
                              >
                                X
                              </button>
                              <button
                                title="Set as done"
                                className="btn-success"
                                type="button"
                              >
                                V
                              </button>
                              <button
                                title="Set as in progress"
                                className="btn-primary"
                                type="button"
                              >
                                ~
                              </button>
                            </span>
                          )}
                        </li>
                      ))
                    }
                  </ol>
                  <button>Добавить новый</button>
                </Tab>
              ))
            }
          </Tabs>
        </>
      );
    }

    return null;
  }
}

export default Tasks;
