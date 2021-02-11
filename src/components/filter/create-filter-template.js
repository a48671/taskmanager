function createFilterMarkup({ name, count }, isChecked, isDisabled) {
    return(`
        <input
            type="radio"
            id="filter__${name}"
            class="filter__input visually-hidden"
            name="filter"
            ${isChecked ? 'checked' : ''}
            ${isDisabled ? 'disabled' : ''}
        />
        <label for="filter__${name}" class="filter__label">
            ${name}
            <span class="filter__${name}-count">${count}</span></label
        >
    `);
}

export function createFilterTemplate(filters) {
    const filtersMarkup = filters
        .map((filter, index) => createFilterMarkup(filter, index === 0, !filter.count))
        .join('\n');
    return(
        `<section class="main__filter filter container">
            ${filtersMarkup}
        </section>`
    );
}
