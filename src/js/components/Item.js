import React from 'react';
import { STATUS, PRIORITY } from '../consts';
import { observer, inject } from 'mobx-react';

@inject(({ todos }) => ({
	list: todos.list,
	changeStatus: todos.changeStatus,
	changePriority: todos.changePriority,
	removeTodo: todos.removeTodo,
}))

@observer
export default class Item extends React.Component {

	_changeStatus = item => this.props.changeStatus(item);

	_changePriority = item => this.props.changePriority(item);

	_remove = item => this.props.removeTodo(item);

	render() {
		const { text, status, item } = this.props;
		return (
			<div className={`item ${status === STATUS.DONE ? "item-done" : ""}`}>
				<button onClick={() => this._changeStatus(item)} className="complete" />
				<div htmlFor="option" className="item-name">{text}</div>
				{
					status === STATUS.DONE ?
						<button className="like" />
						:
						<React.Fragment>
							<button onClick={() => this._remove(item)} className="delete" />
							{
								item.priority === PRIORITY.HIGHT ?
									<button onClick={() => this._changePriority(item)} className="fire heartBeat" />
									:
									<button onClick={() => this._changePriority(item)} className="rocket" />
							}
						</React.Fragment>
				}
			</div>
		);
	}
}