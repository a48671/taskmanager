import { createFilterTemplate } from './create-filter-template';
import { AbstractComponent } from "/src/components/abstract-component";


export class Filter extends AbstractComponent {
    constructor(filters) {
        super();
        this._filters = filters;
    }
    getTemplate() {
        return createFilterTemplate(this._filters);
    }
}
