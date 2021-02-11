export const renderPosition = {
    ATRERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend'
}

export function render(container, element, place = renderPosition.BEFOREEND) {

    switch(place) {
        case renderPosition.BEFOREEND:
            container.append(element);
            break;
        case renderPosition.ATRERBEGIN:
            container.prepend(element);
            break;
    }
}
