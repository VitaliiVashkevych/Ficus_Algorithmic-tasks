function findDeepKey(obj, key) {
  let result;

  for (const el in obj) {
    if (el === key) {
      result = obj[el]
      return result;
    }

    if (typeof obj[el] === "object") {
      result = findDeepKey(obj[el], key);
    }
  }

  return result
}

const data = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

console.log(findDeepKey(data, "e"));
// console.log(data.b.d.e);

// Expected output: 3
