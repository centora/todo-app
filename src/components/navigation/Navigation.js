import './navigation.scss';

const Item = (props) => {
  const { text } = props;
  const itemRoute = `/${text.toLowerCase()}`;
  return <li><a href={itemRoute}>{ text }</a></li>;
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
