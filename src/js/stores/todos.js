import { observable, action } from 'mobx';
import { STATUS } from '../consts';

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
			priority: false
		}
		this.list.unshift(todo);
	}

	@action changeStatus(item, status) {
		if (!status || !item) return;
		this.list.map(t => {
			if (t.id === item.id) {
				t.status = status;
			}
		});
	}

	@action changePriority(item) {
		if (!item) return;
		this.list.map(t => {
			if (t.id === item.id) {
				t.priority = !t.priority;
			}
		});
	}
}

const self = new Todos();
export default self;
