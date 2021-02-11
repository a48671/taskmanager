import { createFilterTemplate } from './create-filter-template';
import { createElement } from '/src/utils';

export class Filter {
    constructor(filters) {
        this._filters = filters;
        this._element = null;
    }
    getTemplate() {
        return createFilterTemplate(this._filters);
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
