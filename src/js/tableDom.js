import * as sort from '@/js/sort';

export const tableContainerDom = document.createElement('div');
tableContainerDom.classList.add('table_container');

export const tableDom = document.createElement('table');
tableContainerDom.appendChild(tableDom);

export const tableTheadDom = document.createElement('thead');


export const tableColTitles = ["id", "name", "age", "income"];

tableColTitles.forEach((element) => {
  const dom = document.createElement('th');
  dom.scope = 'col';
  dom.textContent = element;
  tableTheadDom.appendChild(dom);
});

tableDom.appendChild(tableTheadDom);


export const tableTbodyDom = document.createElement('tbody');


tableDom.appendChild(tableTbodyDom);