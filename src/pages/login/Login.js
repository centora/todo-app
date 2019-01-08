import { login } from '../../services';
import './login.scss';
  
export const Login = ({ onLogin }) => {
  const onSubmit = (event) => {
    const { elements } = event.target;
    const data = {
      email: elements.email.value,
      password: elements.password.value
    };
    console.log(data);

    login(data).then(onLogin);

    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter email"
        required
        name="email"
        defaultValue="admin@a.com"
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        required
        name="password"
        defaultValue="admin"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};
