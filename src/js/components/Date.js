import React from 'react';
import moment from 'moment';

export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: {}
    }
  }

  componentDidMount() {
    this.setDate();
  }

  setDate() {
    let currentDate = {
      day: moment().date(),
      month: moment().format('MMM'),
      year: moment().year(),
      weekday: moment().format('dddd')
    };
    this.setState({ currentDate });
  }

  render() {
    const { currentDate } = this.state;
    return <div className="date">
      <div className="calendar">
        <div className="day">{currentDate.day}</div>
        <div className="my">
          <div className="month">{currentDate.month}</div>
          <div className="year">{currentDate.year}</div>
        </div>
      </div>
      <div className="today">{currentDate.weekday}</div>
    </div>;
  }
}