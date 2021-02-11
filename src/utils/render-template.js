export function renderTemplate(container, template, place = 'beforeend') {
    container.insertAdjacentHTML(place, template);
}
