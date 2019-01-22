import { login } from '../../services';
import './login.scss';

export const Login = ({ onLogin }) => {
  const onSubmit = (event) => {
    const { elements } = event.target;
    const data = {
      email: elements.email.value,
      password: elements.password.value
    };
    login(data).then(onLogin);
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <h1 className="main-title">Login</h1>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter email"
          required
          name="email"
          defaultValue="admin@a.com"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Enter password"
          required
          name="password"
          defaultValue="admin"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
