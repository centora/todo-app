import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Item = (props) => {
  const { text } = props;
  const itemRoute = `/${text.toLowerCase()}`;
  return <li><NavLink to={itemRoute} activeClassName="active">{ text }</NavLink></li>;
};

export const Nav = (props) => {
  const { list } = props;
  const items = list.map((item, index) => (
    <Item key={index} text={item} />
  ));
  return (
    <nav className="navigation">
      <ul>
        {items}
      </ul>
    </nav>
  );
};
