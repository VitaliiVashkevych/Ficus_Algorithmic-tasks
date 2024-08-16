//UNFINISHED

function findDeepKey(obj, key) {
  let result = '';

  // if (found) {
  //   return result
  // }

  // if (!found) {
    for (const el in obj) {
      if (el === key) {
        found = true;
        result.push(obj[el]);
      }
  
      if (typeof obj[el] === "object") {
        findDeepKey(obj[el], key);
      }
    }
  // }
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
