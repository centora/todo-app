import ReactDom from 'react-dom';
import './css/app.scss';

import { AppComponent } from './appComponent';

const App = (
  <>
    <AppComponent />
  </>
);

ReactDom.render(App, document.getElementById('app'));
