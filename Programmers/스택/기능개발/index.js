function solution(progresses, speeds) {
  let answer = [0];
  let times = progresses.map((time, index) =>
    Math.ceil((100 - time) / speeds[index])
  );
  let maxDay = times[0];

  for (let i = 0, j = 0; i < times.length; i++) {
    if (times[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = times[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
