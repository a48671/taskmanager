function createDay(day, isChecked, index) {
    return(`
        <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-${day}-${index}"
            name="repeat"
            value="${day}"
            ${isChecked ? 'checked' : ''}
        />
        <label class="card__repeat-day" for="repeat-${day}-${index}">${day}</label>
    `);
}

export function createDaysRepeat(repeatingDays) {
    const renderDays = Object.entries(repeatingDays)
        .map((day, index) => (createDay(...day, index)))
        .join('\n');
    return renderDays;
}
