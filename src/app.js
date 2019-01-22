import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './css/app.scss';

import { AppComponent } from './appComponent';

const App = (
  <Router>
    <AppComponent />
  </Router>
);

ReactDom.render(App, document.getElementById('app'));
