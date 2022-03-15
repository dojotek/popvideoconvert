import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './pages/Home';

function render() {
  ReactDOM.render(<Home/>, document.getElementById('main-app'));
}

render();