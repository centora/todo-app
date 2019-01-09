import { Nav } from '../navigation';
import './header.scss';

export const Header = ({ user }) => (
  <header className="header">
    <a href="/" className="logo">
      <img src="images/logo.png" alt="Todo" />
    </a>
    <Nav list={['Home', 'Tasks']} />
    <div className="user-box">
      {
        user ? (
          <>
            <span>{user.firstName}</span>
          </>
        ) : (
          <>
            <span><a href="/signin">Signin</a></span>
            <span><a href="/signup">Signup</a></span>
          </>
        )
      }
    </div>
  </header>
);
