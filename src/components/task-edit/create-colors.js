import { COLORS } from '/src/const/colors';

function createColor(color, isChecked, index) {
    return(`
        <input
            type="radio"
            id="color-${color}-${index}"
            class="card__color-input card__color-input--${color} visually-hidden"
            name="color"
            value="${color}"
            ${isChecked ? 'checked' : ''}
        />
        <label
        for="color-${color}-${index}"
        class="card__color card__color--${color}"
        >
            ${color}
        </label>
    `);
}

export function createColors(checkedColor) {
    const renderColors = COLORS
        .map((color, index) => createColor(color, color === checkedColor, index))
        .join('\n');
    return renderColors;
}
