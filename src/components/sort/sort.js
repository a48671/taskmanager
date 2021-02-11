import { createSortTemplate } from './create-sort-tamplate';
import { createElement } from '/src/utils';

export class Sort {
    constructor() {
        this._element = null;
    }
    getTemplate() {
        return createSortTemplate();
    }
    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }
        return this._element;
    }
}
