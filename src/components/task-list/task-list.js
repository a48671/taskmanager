import { AbstractComponent } from "/src/components/abstract-component";

export class TaskList extends AbstractComponent {
    getTemplate() {
        return(`<div class="board__tasks"></div>`);
    }
}
