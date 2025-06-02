import { ScoreReport } from '../model/golf.model';

export function scoreOfHole(
  par: number,
  strokes: number,
): ScoreReport | string {
  if (strokes <= 0 || strokes % 1 !== 0) {
    return 'Invalid number of strokes';
  }

  if (par <= 0 || par % 1 !== 0) {
    return 'Invalid number of par';
  }

  if (par < 3) {
    return 'Par must be at least 3';
  }

  const calScore = strokes - par;
  let scoreMessage = '';

  if (
    (calScore < -2 && [3, 4, 5].includes(par)) ||
    (calScore < -3 && par >= 6)
  ) {
    return 'Invalid number of score';
  }

  switch (calScore) {
    case -3:
      scoreMessage = 'Albatross';
      break;
    case -2:
      scoreMessage = 'Eagle';
      break;
    case -1:
      scoreMessage = 'Birdie';
      break;
    case 0:
      scoreMessage = 'Par';
      break;
    case 1:
      scoreMessage = 'Bogey';
      break;
    case 2:
      scoreMessage = 'Double Bogey';
      break;
    case 3:
      scoreMessage = 'Triple Bogey';
      break;
    case 4:
      scoreMessage = 'Quadruple Bogey';
      break;
    case 5:
      scoreMessage = 'Quintuple Bogey';
      break;
    default:
      scoreMessage = `+${calScore}`;
  }

  return {
    score: calScore,
    message: scoreMessage,
  };
}
