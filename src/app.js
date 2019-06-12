import React from 'react';
import Date from './js/components/Date';
import { render } from 'react-dom';
import ItemList from './js/components/ItemList';
import { Provider } from 'mobx-react';
import stores from './js/stores';

import './global.css';

const CATE = [
  { id: 1, name: "3MDEV" },
  { id: 2, name: "DEALER" },
];

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="app">
          <Date />
          <ItemList />
        </div>
      </Provider>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);