import { createSortTemplate } from './create-sort-tamplate';
import { AbstractComponent } from "/src/components/abstract-component";

export class Sort extends AbstractComponent {
    getTemplate() {
        return createSortTemplate();
    }
}
