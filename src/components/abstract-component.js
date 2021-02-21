import {createElement} from "../utils";

export class AbstractComponent {
    constructor() {
        if (new.target === AbstractComponent) {
            throw new Error('This abstract class');
        }
        this._element = null;
    }
    getTemplate() {
        throw new Error('This method did not implemented')
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
