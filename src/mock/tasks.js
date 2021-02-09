import { WEEK_DAY_NAMES } from '/src/const/week-day-names';
import { COLORS } from '/src/const/colors';

function generateDate() {
    const sign = Math.random() < 0.5 ? 1 : -1;
    const diffValue = Math.ceil(Math.random() * 7) * sign;
    const date = new Date();
    const day = date.getDate() + diffValue;
    date.setDate(day ? day : 1);
    return Math.random() < 0.5 ? null : date;
}

const repeatingDays = WEEK_DAY_NAMES.reduce((acc, name) => ({ ...acc, [name]: Math.random() < 0.5 }), {});

function generateTask() {
    return {
        color: COLORS[Math.floor(Math.random() * 5)],
        description: 'Example task with default color.',
        dueDate: generateDate(),
        isArchive: Math.random() > 0.5,
        isFavorite: Math.random() > 0.5,
        repeatingDays
    };
}

function generateTasks(count) {
    return new Array(count)
        .fill('')
        .map(generateTask);
}

export { generateTask, generateTasks };
