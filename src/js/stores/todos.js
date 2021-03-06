import { observable, action, computed } from 'mobx';
import { STATUS, PRIORITY } from '../consts';
import _remove from "lodash/remove";
import moment from 'moment';
import storage from '../utils/storage';

const updateTodo = list => {
	storage.set('_LIST', JSON.stringify(list));
}

class Todos {
	@observable list = [];

	@computed get getList() {
		storage.get("_LIST")
			.then(res => {
				this.list = JSON.parse(res);
			})
			.catch(err => console.log('get list err', err))
	}

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
		updateTodo(this.list);
	}

	@action changeStatus(item) {
		if (!item) return;
		this.list.map(t => {
			if (t.id === item.id) {
				t.status = t.status === STATUS.DOING ? STATUS.DONE : STATUS.DOING
			}
		});
		updateTodo(this.list);
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
		updateTodo(this.list);
	}

}

const self = new Todos();
export default self;
