import { Login } from '../../pages/login';
import Home from '../../pages/home';
import { TodoList } from '../todoList';
import './main.scss';

export class Main extends Component {
  componentDidMount() {

  }

  render() {
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
                            <TodoList />
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
