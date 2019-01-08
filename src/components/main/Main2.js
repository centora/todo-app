import { Tabs, Tab } from '../tabs';
import { TodoList } from '../todoList';
import './main.scss';

export class Main2 extends Component {
  render() {
    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    return (
      <main className="main">
        <div className="content">
          <Tabs selectedIndex={1} titles={weekDays}>
            {
              weekDays.map((day, index) => (
                <Tab title={day} key={index}>
                  <TodoList />
                </Tab>
              ))
            }
          </Tabs>
        </div>
      </main>
    );
  }
}
