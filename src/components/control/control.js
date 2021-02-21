import { createControlTemplate } from "./create-control-template";
import { AbstractComponent } from "/src/components/abstract-component";


export class Control extends AbstractComponent {
    getTemplate() {
        return createControlTemplate();
    }
}
