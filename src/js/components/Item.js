import React from 'react';

export default class Item extends React.Component {

  render() {
    return (
      <div className="item">
        <button className="complete" />
        <div for="option" className="item-name">{this.props.text}</div>
      </div>
    );
  }
}