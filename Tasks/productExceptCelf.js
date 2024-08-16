function productExceptSelf(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let tempResult = 1;

    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }

      tempResult *= nums[j];
    }

    result.push(tempResult);
  }

  return result;
}
console.log(productExceptSelf([1, 2, 3, 4]));
// Expected output: [24, 12, 8, 6]
