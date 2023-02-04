export function isNumber(element) {
  return element === +element;
}

export function isString(element) {
  return typeof (element) === "string";
}

// const list = [324, 12, 434, 54, 1213];
// const list2 = [323, "1223", 323, "dfsf", [12, 222], [[544]], "1223"];

export function mysort(sortList) {
  const flatList = sortList.flat(Infinity);
  const filterList = flatList.filter(element => isNumber(+element)); // 筛选

  const setList = [...new Set(filterList)];
  const mapList = setList.map(element => +element); // 变形

  mapList.sort((a, b) => a - b);

  // console.log('¥¥¥', mapList);
}

// mysort(list2);