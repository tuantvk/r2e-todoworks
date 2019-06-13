import { observable, action } from 'mobx';
import { STATUS, PRIORITY } from '../consts';
import _remove from "lodash/remove";
import moment from 'moment';

class Todos {
	@observable list = [];

	@action addTodo(name = '', category) {
		if (name.trim().length <= 0) {
			return
		}
		let todo = {
			id: this.list.length,
			name,
			category,
			status: STATUS.DOING,
			priority: PRIORITY.LOWER,
			date: moment().unix()
		}
		this.list.unshift(todo);
	}

	@action changeStatus(item) {
		if (!item) return;
		this.list.map(t => {
			if (t.id === item.id) {
				t.status = t.status === STATUS.DOING ? STATUS.DONE : STATUS.DOING
			}
		});
	}

	@action changePriority(item) {
		if (!item) return;
		this.list.map(t => {
			if (t.id === item.id) {
				t.priority = t.priority === PRIORITY.LOWER ? PRIORITY.HIGHT : PRIORITY.LOWER
			}
		});
	}

	@action removeTodo(item) {
		if (!item) return;
		_remove(this.list, i => i.id === item.id);
	}

}

const self = new Todos();
export default self;
