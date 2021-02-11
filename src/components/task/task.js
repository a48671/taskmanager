import { createTaskTemplate } from './create-task-template';
import { createElement } from '/src/utils';

export class Task {
    constructor(task) {
        this._task = task;
        this._element = null;
    }
    getTemplate() {
        return createTaskTemplate(this._task);
    }
    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate())
        }
        return this._element;
    }
    removeElement() {
        this._element = null;
    }
}
