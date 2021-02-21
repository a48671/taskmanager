import { createBoardTemplate } from './create-board-template';
import { AbstractComponent } from "/src/components/abstract-component";


export class Board extends AbstractComponent {
    getTemplate() {
        return createBoardTemplate();
    }
}
