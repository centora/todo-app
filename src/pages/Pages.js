import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './login';
import Home from './home';
import { CreateUser } from './createUser';
import { UpdateUser } from './updateUser';
import Tasks from './tasks';

export const Pages = ({
  user,
  onLogin,
  info
}) => {
  const homePathes = ['/', '/home'];
  return (
    <Switch>
      {
        user ? [
          <Route
            path={homePathes}
            exact
            render={({ history }) => <Home user={user} info={info} history={history} />}
            key="home"
          />,
          <Route
            path="/tasks"
            exact
            component={Tasks}
            key="tasks"
          />,
          <Route
            path="/profile"
            exact
            render={() => <UpdateUser user={user} />}
            key="updateUser"
          />,
          <Redirect from="/signin" to="/home" key="toHome" />
        ] : [
          <Route
            path="/signin"
            exact
            render={() => <Login onLogin={onLogin} />}
            key="signin"
          />,
          <Route
            path="/signup"
            exact
            component={CreateUser}
            key="signup"
          />,
          <Route
            path={homePathes}
            exact
            render={() => <div><h1 className="main-title">Welcom to the TODO app</h1></div>}
            key="signup"
          />,
          <Redirect from="/tasks" to="/home" key="tasksSignin" />,
        ]
      }
      <Route
        render={({ location }) => <h1> {location.pathname} Page is not found</h1>}
      />
    </Switch>
  );
};
