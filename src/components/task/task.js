import { createTaskTemplate } from './create-task-template';
import { AbstractComponent } from "/src/components/abstract-component";


export class Task extends AbstractComponent {
    constructor(task) {
        super();
        this._task = task;
    }
    getTemplate() {
        return createTaskTemplate(this._task);
    }
}
