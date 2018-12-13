import ReactDom from 'react-dom';
import './css/app.scss';

import { Welcome } from './components/welcome';


const App = (
  <>
    <Welcome />
  </>
);

ReactDom.render(App, document.getElementById('app'));
