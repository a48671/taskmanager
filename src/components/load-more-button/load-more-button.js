import { AbstractComponent } from "/src/components/abstract-component";


export class LoadMoreButton extends AbstractComponent {
    getTemplate() {
        return(`<button class="load-more" type="button">load more</button>`);
    }
}
