export function isNumber(element) {
  return element === +element;
}

export function isString(element) {
  return typeof (element) === "string";
}

export function isEmpty(element) {
  // return element.toString().trim().length !== 0;
  return element.toString().trim() === "";
}