import { Login } from '../../pages/login';
import Home from '../../pages/home';
import Tasks from '../../pages/tasks';
import './main.scss';

export class Main extends Component {
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
                            <Tasks />
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
