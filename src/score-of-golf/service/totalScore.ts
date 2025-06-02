export function totalScore(scores: number[]): string | number {
  let totalScore = 0;
  for (const score of scores) {
    if (score < -4 || score % 1 !== 0) {
      return 'Score must be integer number and possible lowest value is -4';
    }
    totalScore += score;
  }
  return totalScore;
}
