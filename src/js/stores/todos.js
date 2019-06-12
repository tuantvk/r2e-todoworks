
import { observable, action } from 'mobx';

class Todos {
    @observable todos = [];

    @action add() {

    }
}

const self = new Todos();
export default self;
