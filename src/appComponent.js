import { withRouter } from 'react-router-dom';
import { Header } from './components/header';
import { Main } from './components/main';
import { checkUser, getInfo } from './services';
import { Pages } from './pages/Pages';

export class AppComponent extends Component {
  state = {
    user: null,
    info: null,
    loading: true
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    const { user } = this.state;
    if (!prevState.user && user) {
      getInfo()
        .then(info => this.setState({ info }));
    }
  }

  onLogin = (user) => {
    this.setState({ user });
  }

  render() {
    const { user, info, loading } = this.state;
    const ConnectedHeader = withRouter(({ history }) => (
      <Header
        user={user}
        history={history}
        onLogout={this.onLogout}
      />
    ));
    return (
      <>
        <ConnectedHeader />
        <Main
          user={user}
          info={info}
          onLogin={this.onLogin}
          loading={loading}
        >
          <Pages
            user={user}
            info={info}
            onLogin={this.onLogin}
          />
        </Main>
      </>
    );
  }
}
