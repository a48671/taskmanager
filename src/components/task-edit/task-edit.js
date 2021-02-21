import { createTaskEditTemplate } from './create-task-edit-template';
import { AbstractComponent } from "/src/components/abstract-component";


export class TaskEdit extends AbstractComponent {
    constructor(task) {
        super();
        this._task = task;
    }
    getTemplate() {
        return createTaskEditTemplate(this._task);
    }
}
