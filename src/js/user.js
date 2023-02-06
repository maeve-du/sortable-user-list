import { isEmpty, isNumber, isString } from '@/js/utils';

// 构造函数，创造新的object
export function UserInfoStructure() {
  this.id = undefined;
  this.name = undefined;
  this.age = undefined;
  this.income = undefined;
}

export class User {
  #id = undefined;
  #name = undefined;
  #age = undefined;
  #income = undefined;
  constructor(userInfo) {
    this.id = userInfo.id;
    this.#name = userInfo.name;
    this.#age = userInfo.age;
    this.#income = userInfo.income;
  }

  get name() {
    return this.name;
  }
  get age() {
    return this.name;
  }
  get imcome() {
    return this.imcome;
  }

}

// 筛查，并创造
export function createUser(userInfo) {
  let errorFlag = false;
  let errorInfo = '';

  if (!isString(userInfo.name)) {
    errorFlag = true;
    errorInfo += "Name is not string \n";
  }

  if (!isNumber(userInfo.age)) {
    errorFlag = true;
    errorInfo += "Age is not number \n";
  }
  if (!isNumber(userInfo.income)) {
    errorFlag = true;
    errorInfo += "Income is not number \n";
  }

  if (!isEmpty(userInfo.name) || !isEmpty(userInfo.age) || !isEmpty(userInfo.income)) {
    errorFlag = true;
    errorInfo += "Input can not be empty \n";
  }

  if (errorFlag) {
    return { errorInfo };
  } else {
    return new User(userInfo);
  }

}

