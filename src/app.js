import React from 'react';
import Date from './js/components/Date';
import { render } from 'react-dom';
import ItemList from './js/components/ItemList';

import './global.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Date />
        <ItemList />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);