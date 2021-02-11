import { createControlTemplate } from "./create-control-template";
import { createElement } from '/src/utils/create-element';

export class Control {
    constructor() {
        this._element = null;
    }
    getTemplate() {
        return createControlTemplate();
    }
    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }
        return this._element;
    }
    removeElement() {
        this.element = null;
    }
}
