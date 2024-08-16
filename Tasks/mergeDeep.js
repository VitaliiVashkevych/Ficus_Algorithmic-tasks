// FROM
// https://medium.com/@abbas.ashraf19/8-best-methods-for-merging-nested-objects-in-javascript-ff3c813016d9

function mergeDeep(obj1, obj2) {
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        obj1[key] = mergeDeep(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
}
const obj1 = {
  a: 1,
  b: {
    c: 2
  }
};
const obj2 = {
  b: {
    d: 3
  },
  e: 4
};
console.log(mergeDeep(obj1, obj2));
// Expected output: {a: 1, b: {c: 2, d: 3}, e: 4}