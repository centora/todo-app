import { Login } from '../../pages/login';
import Home from '../../pages/home';
import Tasks from '../../pages/tasks';
import './main.scss';
import { getTasks } from '../../services';

export class Main extends Component {
  state = {
    days: []
  };

  componentDidMount() {
    getTasks()
      .then(days => this.setState({ days }));
  }

  render() {
    const { days } = this.state;
    const { user, loading, onLogin } = this.props;
    return (
      <main className="main">
        <div className="content">
          {
            loading
              ? 'Loding...'
              : (
                  <>
                    {
                      user
                        ? (
                          <div>
                            <Home user={user} />

                            <br />
                            <hr />
                            <br />
                            <Tasks days={days} />
                          </div>
                        ) : <Login onLogin={onLogin} />
                    }
                 </>
              )
          }
        </div>
      </main>
    );
  }
}
