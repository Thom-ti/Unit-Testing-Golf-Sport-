import { ScoreReport } from '../model/golf.model';

export function saveScore(
  scoreReport: ScoreReport,
  scores: number[],
): number[] | string {
  if (scoreReport.score < -3 || scoreReport.score % 1 !== 0) {
    return 'Invalid number in score property';
  }

  if (scores.some((score) => score < -4 || score % 1 !== 0)) {
    return 'Invalid number in scores';
  }

  scores.push(scoreReport.score);
  return scores;
}
