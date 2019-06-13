import React from 'react';
import Item from './Item';
import { observer, inject } from 'mobx-react';
import _sortBy from 'lodash/sortBy';
import _filter from 'lodash/filter';
import { STATUS } from '../consts';

@inject(({ todos }) => ({
  list: todos.list,
  addTodo: todos.addTodo
}))

@observer
export default class ItemList extends React.Component {

  _addItem = e => {
    e.preventDefault();
    this.props.addTodo(this._inputElement.value, 1);
    this._inputElement.value = '';
    this._inputElement.focus();
  }

  render() {
    const { list } = this.props;
    let listDoing = _filter(list, m => m.status === STATUS.DOING);
    let listDone = _filter(list, m => m.status === STATUS.DONE);
    let formatList = _sortBy(listDoing, ['priority']);
    return (
      <div className="item-list">
        <form className="form" onSubmit={this._addItem}>
          <input
            ref={(a) => this._inputElement = a}
            placeholder="Add new item"
            autoFocus
          />
        </form>
        <div className="list-doing">
          {
            formatList && formatList.map(item => {
              return (
                <Item
                  item={item}
                  text={item.name}
                  status={item.status}
                  key={item.id}
                />
              );
            })
          }
        </div>
        {
          listDone && listDone.map(item => {
            return (
              <Item
                item={item}
                text={item.name}
                status={item.status}
                key={item.id}
              />
            );
          })
        }
      </div>
    );
  }
}