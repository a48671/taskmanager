import { render } from './render';
import { createControl } from './create-control';
import { createFilters } from './create-filters';
import { createBordContainer } from './create-board-container';
import { createTask } from './create-task';
import { createTaskEdit } from './create-task-edit';
import { createLoadMoreButton } from './create-load-more-button';

const main = document.querySelector('.main');
const container = document.querySelector('.main__control');

render(container, createControl());
render(main, createFilters());
render(main, createBordContainer());
const board = document.querySelector('.board');
const tasks = document.querySelector('.board__tasks');
render(board, createLoadMoreButton());
render(tasks, createTaskEdit());
for (let i = 0; i <= 3; i++) {
    render(tasks, createTask());
}

