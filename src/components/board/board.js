import { createBoardTemplate } from './create-board-template';
import { createElement } from "/src/utils";

export class Board {
    constructor() {
        this._element = null;
    }
    getTemplate() {
        return createBoardTemplate();
    }
    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }
        return this._element;
    }
    removeElement() {
        this._element = null;
    }
}
