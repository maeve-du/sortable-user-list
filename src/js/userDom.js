import { tableContainerDom } from "./tableDom";

// create layout dom
export const userDom = document.createElement('div');
userDom.classList.add('user_info');

export const userListDom = document.createElement('div');
userListDom.classList.add('user_list');

export const sidebarLeftDom = document.createElement('div');
sidebarLeftDom.classList.add('sidebar_left');


// create user list dom

export const userListHeaderDom = document.createElement('div');
userListHeaderDom.classList.add('userlist_header');

export const userlistTitleDom = document.createElement('h1');
userlistTitleDom.textContent = "User Information";

// create left sidebar input dom
const createInputGroup = function (labelDom, inputDom) {
  const inputDivDom = document.createElement('div');
  inputGroupDom.appendChild(inputDivDom);

  inputDivDom.appendChild(labelDom);
  inputDivDom.appendChild(inputDom);
};

export const inputGroupDom = document.createElement('div');
inputGroupDom.classList.add('input_group');

export const InputNameDom = document.createElement('input');
InputNameDom.id = 'user_name';

export const labelNameDom = document.createElement('label');
labelNameDom.textContent = 'Name:';
labelNameDom.setAttribute('for', InputNameDom.id);

export const InputAgeDom = document.createElement('input');
InputAgeDom.id = 'user_age';
InputAgeDom.type = 'range';

export const labelAgeDom = document.createElement('label');
labelAgeDom.textContent = 'Age:';
labelAgeDom.setAttribute('for', InputAgeDom.id);

const inputIncomeDom = document.createElement('input');
inputIncomeDom.id = 'user_income';


export const displayAgeDom = document.createElement('p');
// displayAgeDom.textContent = '18';
InputAgeDom.value = 18;
displayAgeDom.textContent = InputAgeDom.value;

export const labelIncomeDom = document.createElement('label');
labelIncomeDom.textContent = "Income:";
labelIncomeDom.setAttribute('for', inputIncomeDom.id);

export const inputActionDom = document.createElement('div');
export const inputsumbitButton = document.createElement('button');
inputsumbitButton.type = 'sumbit';
inputsumbitButton.textContent = 'Add User';


const ageDivDom = document.createElement('div');
ageDivDom.classList.add('age_title');

// append dom

// layout

userDom.appendChild(userListDom);
userDom.appendChild(sidebarLeftDom);

// user list - right

userListHeaderDom.appendChild(userlistTitleDom);
userListDom.appendChild(userListHeaderDom);

userListDom.appendChild(tableContainerDom);

// sidebar - left
createInputGroup(labelNameDom, InputNameDom);
// createInputGroup(labelAgeDom, InputAgeDom);

createInputGroup(ageDivDom, InputAgeDom);
ageDivDom.appendChild(labelAgeDom);
ageDivDom.appendChild(displayAgeDom);


createInputGroup(labelIncomeDom, inputIncomeDom);
inputActionDom.appendChild(inputsumbitButton);
inputGroupDom.appendChild(inputActionDom);

sidebarLeftDom.appendChild(inputGroupDom);

InputAgeDom.addEventListener('click', () => {
  displayAgeDom.textContent = InputAgeDom.value;
});

