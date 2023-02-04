import * as userDom from '@/js/userDom';
import * as tableDom from '@/js/tableDom';
import { UserInfoStructure, User, createUser } from '@/js/user';
import sortBy from 'sort-by';


const userInfoList = [
  { id: 1, name: 'Alex Smith', age: 28, income: 50000 },
  { id: 2, name: 'Emma Johnson', age: 25, income: 45000 },
  { id: 3, name: 'Michael Brown', age: 35, income: 55000 },
  { id: 4, name: 'Ava Davis', age: 32, income: 52000 },
  { id: 5, name: 'Olivia Wilson', age: 29, income: 43000 },
  { id: 6, name: 'Sophia Lee', age: 26, income: 41000 },
  { id: 7, name: 'Mia Anderson', age: 40, income: 60000 },
  { id: 8, name: 'Madison Nelson', age: 38, income: 57000 },
  { id: 9, name: 'Isabella Clark', age: 36, income: 56000 },
  { id: 10, name: 'William Thompson', age: 31, income: 51500 },
];

const renderTable = function (userData) {

  for (const user of userData) {
    const rowDom = document.createElement('tr');
    tableDom.tableTbodyDom.appendChild(rowDom);

    const thDom = document.createElement('th');
    thDom.scope = 'row';
    thDom.textContent = user.id;
    rowDom.appendChild(thDom);

    const td1 = document.createElement('td');
    td1.textContent = user.name;

    const td2 = document.createElement('td');
    td2.textContent = user.age;

    const td3 = document.createElement('td');
    td3.textContent = user.income;

    rowDom.appendChild(td1);
    rowDom.appendChild(td2);
    rowDom.appendChild(td3);

  }

};

renderTable(userInfoList);
// userInfoList.forEach((element) => {
//   renderTable(element);
// });


// userDom.userInfoSubmit.addEventListener('click', () => {
//   const userInfo = new UserInfoStructure();

//   userInfo.name = userDom.userNameInput.value;
//   userInfo.age = +userDom.userAgeInput.value;
//   userInfo.income = +userDom.userIncomInput.value;

//   console.log(userInfo);

//   const user = createUser(userInfo);
//   if (user instanceof User) {
//     userInfoList.push({ ...userInfo });
//     // console.log(userInfoList);
//     console.log(sort(["age", "name"]));
//   } else {
//     console.error(user.errorInfo);
//   }

// });

function sort(attr) {
  return userInfoList.sort(sortBy(...attr));
}

