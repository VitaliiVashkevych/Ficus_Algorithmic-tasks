function groupBy(array, property) {
  const result = {};

  for (let i = 0; i < array.length; i++) {
    if (!result[array[i][property]]) {
      result[array[i][property]] = [array[i]];
    } else {
      result[array[i][property]].push(array[i])
    }
  }

  return result;
}
const people = [
  {name: 'Alice', age: 21},
  {name: 'Bob', age: 21},
  {name: 'Charlie', age: 25}
];
console.log(groupBy(people, 'age'));
// Expected output:
// {
//   21: [{name: 'Alice', age: 21}, {name: 'Bob', age: 21}],
//   25: [{name: 'Charlie', age: 25}]
// }