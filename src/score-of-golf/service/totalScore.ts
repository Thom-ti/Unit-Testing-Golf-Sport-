export function totalScore(scores: number[]): number | Error {
  let totalScore = 0;
  for (const score of scores) {
    if (score < -4 || score % 1 !== 0) {
      throw new Error(
        'Score must be integer number and possible lowest value is -4',
      );
    }
    totalScore += score;
  }
  return totalScore;
}
