import { observable, action } from 'mobx';

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
			status: 1,
			priority: false
		}
		this.list.unshift(todo);
	}
}

const self = new Todos();
export default self;
