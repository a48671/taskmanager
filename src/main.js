import { render } from '/src/utils';
import { Control } from '/src/components/control';
import { generateFilters } from '/src/mock/filters';
import { generateTasks } from '/src/mock/tasks';
import { Board } from '/src/components/board';
import { Sort } from '/src/components/sort';
import { TaskList } from '/src/components/task-list';
import { LoadMoreButton } from '/src/components/load-more-button';
import { TaskEdit } from '/src/components/task-edit';
import { Filter } from '/src/components/filter';
import { Task } from '/src/components/task';
import { NoTask } from '/src/components/no-task';

const main = document.querySelector('.main');
const container = document.querySelector('.main__control');

function renderBoard(container, tasks) {

    const board = new Board();
    render(main, board.getElement());

    render(container, board.getElement());

    if (tasks.every(task => task.isArchive)) {
        return render(board.getElement(), new NoTask().getElement());
    }

    render(board.getElement(), new Sort().getElement());

    const taskList = new TaskList();
    render(board.getElement(), taskList.getElement());

    const loadMoreButton = new LoadMoreButton();
    render(board.getElement(), loadMoreButton.getElement());

    tasks
        .slice(1, SHOW_TASK_COUNT_ON_START)
        .forEach(task => {
            renderTask(taskList.getElement(), task);
        });

    loadMoreButton.getElement().addEventListener('click', function () {
        const prevTasksCount = showingTasksCount;
        showingTasksCount = showingTasksCount + SHOW_TASK_COUNT_BY_BUTTON;
        tasks
            .slice(prevTasksCount, showingTasksCount)
            .forEach(task => {
                renderTask(taskList.getElement(), task);
            });
        if (showingTasksCount >= tasks.length) {
            loadMoreButton.remove()
        }
    });
}

function renderTask(container, task) {
    const taskElement = new Task(task);
    const taskEditElement = new TaskEdit(task);

    function onEscKeyDown(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            event.preventDefault();
            replaceFormToCard();
            document.removeEventListener('keydown', onEscKeyDown);
        }
    }

    function replaceCardToForm() {
        container.replaceChild(taskEditElement.getElement(), taskElement.getElement());
        document.addEventListener('keydown', onEscKeyDown);
    }
    function replaceFormToCard() {
        container.replaceChild(taskElement.getElement(), taskEditElement.getElement());
        document.removeEventListener('keydown', onEscKeyDown);
    }
    taskElement.getElement()
        .querySelector('.card__btn--edit')
        .addEventListener('click', () => replaceCardToForm());

    taskEditElement.getElement()
        .querySelector('form')
        .addEventListener('submit', (event) => {
            event.preventDefault();
            replaceFormToCard();
        })
    render(container, taskElement.getElement());
}

render(container, new Control().getElement());

const filters = generateFilters();
render(main, new Filter(filters).getElement());

const TASKS_COUNT = 23;
const SHOW_TASK_COUNT_ON_START = 8;
const SHOW_TASK_COUNT_BY_BUTTON = 4;
let showingTasksCount = SHOW_TASK_COUNT_ON_START;
const tasks = generateTasks(TASKS_COUNT);

renderBoard(main, tasks);
