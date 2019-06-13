import React from 'react';
import { STATUS } from '../consts';
import { observer, inject } from 'mobx-react';

@inject(({ todos }) => ({
	list: todos.list,
	changeStatus: todos.changeStatus,
	changePriority: todos.changePriority,
}))

@observer
export default class Item extends React.Component {

	_changeStatus = item => this.props.changeStatus(item, STATUS.DONE);

	_changePriority = item => this.props.changePriority(item);

	render() {
		const { text, status, item } = this.props;
		return (
			<div className={`item ${status === STATUS.DONE ? "item-done" : ""}`}>
				<button onClick={() => this._changeStatus(item)} className="complete" />
				<div htmlFor="option" className="item-name">{text}</div>
				<button className="delete" />
				{
					item.priority ?
						<button onClick={() => this._changePriority(item)} className="fire" />
						:
						<button onClick={() => this._changePriority(item)} className="rocket" />
				}
			</div>
		);
	}
}