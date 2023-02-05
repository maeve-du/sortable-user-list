import '@/css/style.scss';
import '@/js/utils';
import '@/js/sort';

import { userDom } from './userDom';
import { sort } from '@/js/sort';

const appDom = document.getElementById('app');

appDom.appendChild(userDom);

const table = document.querySelector('table');
const headerCell = table.querySelectorAll('th');

headerCell.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.textContent === 'Name') {
      // console.log('¥¥¥');
      console.log(sort(["age", "name"]));
    }
  });
})

