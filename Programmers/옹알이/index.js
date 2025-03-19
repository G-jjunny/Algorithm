function solution(babbling) {
  var answer = 0;
  const regex = /^(?!.*(ayaaya|yeye|woowoo|mama))(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
