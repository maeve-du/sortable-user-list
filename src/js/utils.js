export function isNumber(element) {
  return element === +element;
}

export function isString(element) {
  return typeof (element) === "string";
}

export function isEmpty(element) {
  // return element.toString().trim().length !== 0;
  return element.toString().trim() !== "";
}

export function capFirstLetter(string) {
  return string.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}