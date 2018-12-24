import ReactDom from 'react-dom';
import './css/app.scss';

import { Welcome } from './components/welcome';
import { Categories } from './components/categories';
import { TodoList } from './components/todoList';


const App = (
  <>
    <Welcome />
    <Categories />
    <TodoList />
  </>
);

ReactDom.render(App, document.getElementById('app'));
