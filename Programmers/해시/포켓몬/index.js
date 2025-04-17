function solution(nums) {
  const count = nums.length;
  const newArr = [...new Set(nums)];
  // console.log(newArr)

  if (count / 2 >= newArr.length) return newArr.length;
  else return count / 2;
}
