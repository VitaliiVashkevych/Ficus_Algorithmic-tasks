function invertObject(obj) {
  const result = {};

  for (const entries of Object.entries(obj)) {
    console.log(entries);
    result[entries[1]] = entries[0]
  }

  return result
}
const original = {
  a: 1,
  b: 2,
  c: 3
};
console.log(invertObject(original));
// Expected output: {1: 'a', 2: 'b', 3: 'c'}