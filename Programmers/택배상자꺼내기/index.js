const solution = (n, w, num) => {
  let res = 1;
  const depth = Math.ceil(n / w);
  const target = Math.ceil(num / w);

  // target의 나머지
  const nRemain = n % w || n;
  // 총 나머지
  const numRemain = num % w || num;

  // targer과 최상의 방향의 각 경우
  if (depth % 2 === target % 2 && nRemain < numRemain) res -= 1;
  if (depth % 2 !== target % 2 && nRemain + numRemain <= w) res -= 1;
  return depth - target + res;
};
