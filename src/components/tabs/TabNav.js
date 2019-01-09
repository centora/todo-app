export const TabNav = ({ selectedIndex, titles, selectTab }) => {
  const itemClick = (event, index) => {
    event.preventDefault();
    selectTab(index);
  };

  return (
    <nav className="nav-tab">
      <ul>
        {
          titles.map((title, index) => (
            <li key={index} className={selectedIndex === index ? 'active' : ''}>
              <a href="" onClick={e => itemClick(e, index)}>{title}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
