export function render(block, template, position='beforeend') {
    block.insertAdjacentHTML(position, template);
}
