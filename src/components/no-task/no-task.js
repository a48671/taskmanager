import { AbstractComponent } from "/src/components/abstract-component";

export class NoTask extends AbstractComponent {
    getTemplate() {
        return (
            `<p class="board__no-tasks">
                Click «ADD NEW TASK» in menu to create your first task
            </p>`
        );
    }
}
