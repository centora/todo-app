import './home.scss';
import { getInfo } from '../../services';

class Home extends Component {
  state = {
    info: null,
  }

  componentDidMount() {
    getInfo()
      .then(info => this.setState({ info }));
  }

  render() {
    const { info } = this.state;
    return (
      <article className="invitation">
        {
          info && (
            <div className="info">
              <p>You have <strong>{info.total} tasks</strong></p>
              <p>Done: <strong>{info.done}</strong></p>
              <p>In progress: <strong>{info.inProgress}</strong></p>
              <p>Waiting: <strong>{info.waiting}</strong></p>
            </div>
          )
        }
      </article>
    );
  }
}

export default Home;
