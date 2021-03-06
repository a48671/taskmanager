import { createColors } from './create-colors';
import { createDaysRepeat } from './create-days-reapeat';
import { MONTH_NAMES } from "/src/const/month-names";
import { formatTime } from '/src/utils/format-time';

export function createTaskEditTemplate({ color, description, dueDate, repeatingDays }) {
    const isDateShowing = dueDate instanceof Date;
    const date = isDateShowing ? `${dueDate.getDate()} ${MONTH_NAMES[dueDate.getMonth()]}` : '';
    const time = formatTime(dueDate);
    const repeatClass = 'card--repeat';
    const deadlineClass = 'card--deadline';
    const isRepeating = Object.values(repeatingDays).some(Boolean);
    function renderDate() {
        if (isDateShowing) {
            return(`
                <fieldset class="card__date-deadline">
                    <label class="card__input-deadline-wrap">
                        <input
                            class="card__date"
                            type="text"
                            placeholder=""
                            name="date"
                            value="${date} ${time}"
                        />
                    </label>
                </fieldset>
            `);
        }
        return '';
    }
    return(
        `<article class="card card--edit card--${color} ${repeatClass} ${deadlineClass}">
            <form class="card__form" method="get">
                <div class="card__inner">
                    <div class="card__color-bar">
                        <svg class="card__color-bar-wave" width="100%" height="10">
                            <use xlink:href="#wave"></use>
                        </svg>
                    </div>
                    <div class="card__textarea-wrap">
                        <label>
                            <textarea
                                class="card__text"
                                placeholder="Start typing your text here..."
                                name="text"
                            >
                                ${description}
                            </textarea>
                        </label>
                    </div>
                    <div class="card__settings">
                        <div class="card__details">
                            <div class="card__dates">
                                <button class="card__date-deadline-toggle" type="button">
                                    date:
                                    <span class="card__date-status">
                                        ${isDateShowing ? 'yes' : 'no'}
                                    </span>
                                </button>
                                ${renderDate()}
                                <button class="card__repeat-toggle" type="button">
                                    repeat: <span class="card__repeat-status">${isRepeating ? 'yes' : 'no'}</span>
                                </button>
                                <fieldset class="card__repeat-days">
                                    <div class="card__repeat-days-inner">
                                        ${createDaysRepeat(repeatingDays)}
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div class="card__colors-inner">
                            <h3 class="card__colors-title">Color</h3>
                            <div class="card__colors-wrap">
                                ${createColors(color)}
                            </div>
                        </div>
                    </div>
                    <div class="card__status-btns">
                        <button class="card__save" type="submit">save</button>
                        <button class="card__delete" type="button">delete</button>
                    </div>
                </div>
            </form>
        </article>`
    );
}
