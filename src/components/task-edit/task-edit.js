import { createTaskEditTemplate } from './create-task-edit-template';
import { createElement } from '/src/utils';

export class TaskEdit {
    constructor(task) {
        this._task = task;
        this._element = null;
    }
    getTemplate() {
        return createTaskEditTemplate(this._task);
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
