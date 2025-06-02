import { ScoreReport } from '../model/golf.model';

export function saveScore(
  scoreReport: ScoreReport,
  scores: number[],
): number[] | Error {
  if (scoreReport.score < -3 || scoreReport.score % 1 !== 0) {
    throw new Error('Invalid number in score property');
  }

  if (scores.some((score) => score < -4 || score % 1 !== 0)) {
    throw new Error('Invalid number in scores');
  }

  scores.push(scoreReport.score);
  return scores;
}
