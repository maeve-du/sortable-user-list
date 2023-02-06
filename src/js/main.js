import '@/css/style.scss';
import '@/js/utils';
import '@/js/sort';

import { userDom } from './userDom';
import { sort, sortOptions, renderTable } from '@/js/sort';
import { tableTheadDom } from './tableDom';

const appDom = document.getElementById('app');

appDom.appendChild(userDom);

const table = document.querySelector('table');
const headerCell = table.querySelectorAll('th');

let sortOrder = 0;

headerCell.forEach((element) => {
  element.addEventListener('click', function () {

    if (element.textContent === 'id') {
      if (sortOptions.includes('id')) {
        const index = sortOptions.indexOf('id');
        sortOptions.splice(index, 1);
        tableTheadDom.children[0].classList.remove('active');
      } else {
        sortOptions.unshift('id');
        tableTheadDom.children[0].classList.add('active');
      }
      sort(sortOptions);
    };

    if (element.textContent === 'name') {

      if (sortOptions.includes('name')) {
        const index = sortOptions.indexOf('name');
        sortOptions.splice(index, 1);
        tableTheadDom.children[1].classList.remove('active');
      } else {
        sortOptions.unshift('name');
        tableTheadDom.children[1].classList.add('active');
      }
    };

    if (element.textContent === 'age') {
      if (sortOptions.includes('age')) {
        const index = sortOptions.indexOf('age');
        sortOptions.splice(index, 1);
        tableTheadDom.children[2].classList.remove('active');
      } else {
        sortOptions.unshift('age');
        tableTheadDom.children[2].classList.add('active');
      }
    };

    if (element.textContent === 'income') {
      if (sortOptions.includes('income')) {
        const index = sortOptions.indexOf('income');
        sortOptions.splice(index, 1);
        tableTheadDom.children[3].classList.remove('active');
      } else {
        sortOptions.unshift('income');
        tableTheadDom.children[3].classList.add('active');
      }
    };

    if (!sortOptions.length) {
      sortOptions.push('id');
    }

    // update the data-order attribute with the sort order of each header cell
    headerCell.forEach((headerEl, i) => {
      headerEl.dataset.order = sortOptions.indexOf(headerEl.textContent) + 1;
    });

    console.log('sortoptions', sortOptions);
    renderTable();

  });
})

