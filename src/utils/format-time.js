export function formatTime(date) {
    if (date instanceof Date) {
        return `${date.getHours()}:${date.getMinutes()}`;
    }
    return ``;
}
