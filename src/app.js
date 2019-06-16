import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import Date from './js/components/Date';
import ItemList from './js/components/ItemList';
import stores from './js/stores';
import './global.css';

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