function solution(participant, completion) {
  participant.sort();
  completion.sort();

  console.log(participant);

  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  return answer;
}
