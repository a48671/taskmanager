import { render } from './render';
import { createControl } from './create-control';
import { createFilters } from './create-filters';
import { createBordContainer } from './create-board-container';
import { createTask } from './create-task';
import { createTaskEdit } from './task-edit/create-task-edit';
import { createLoadMoreButton } from './create-load-more-button';
import { generateFilters } from '/src/mock/filters';
import { generateTasks } from '/src/mock/tasks';


const main = document.querySelector('.main');
const container = document.querySelector('.main__control');

render(container, createControl());

const filters = generateFilters();
render(main, createFilters(filters));

render(main, createBordContainer());

const board = document.querySelector('.board');
render(board, createLoadMoreButton());

const tasksElement = document.querySelector('.board__tasks');
const TASKS_COUNT = 23;
const SHOW_TASK_COUNT_ON_START = 8;
const SHOW_TASK_COUNT_BY_BUTTON = 4;
let showingTasksCount = SHOW_TASK_COUNT_ON_START;
const tasks = generateTasks(TASKS_COUNT);
render(tasksElement, createTaskEdit(tasks[0]));

tasks.slice(1, SHOW_TASK_COUNT_ON_START).forEach(task => render(tasksElement, createTask(task)))

const loadMoreButton = document.querySelector('.load-more');
loadMoreButton.addEventListener('click', function () {
    const prevTasksCount = showingTasksCount;
    showingTasksCount = showingTasksCount + SHOW_TASK_COUNT_BY_BUTTON;
    tasks
        .slice(prevTasksCount, showingTasksCount)
        .forEach(task => render(tasksElement, createTask(task)));
    if (showingTasksCount >= tasks.length) {
        loadMoreButton.remove()
    }
})
