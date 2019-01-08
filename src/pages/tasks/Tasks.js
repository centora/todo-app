import './tasks.scss';
import { Tabs, Tab } from '../../components/tabs';

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const date = new Date();
const currDay = date.getDay();

class Tasks extends Component {
  render() {
    const { days } = this.props;
    return (
      <>
        <Tabs selectedIndex={currDay}>
          {
            days.map((tasks, index) => (
              <Tab title={weekDays[index]} key={index}>
                <ul>
                  {
                    tasks.map(item => (
                      <li key={item.id}>{item.title}</li>
                    ))
                  }
                </ul>
              </Tab>
            ))
          }
        </Tabs>
      </>
    );
  }
}

export default Tasks;
