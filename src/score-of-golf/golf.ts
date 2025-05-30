export type ScoreReport = {
  score: number;
  message: string;
};
export type PlayerScore = {
  player: string;
  totalScore: number;
};

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

export function scoreBoard(players: PlayerScore[]): PlayerScore[] | string {
  for (const player of players) {
    if (player.totalScore % 1 !== 0) {
      return 'Invalid number in totalScore property';
    }
  }
  return players.sort((a, b) => a.totalScore - b.totalScore);
}

export function summary(players: PlayerScore[]): string[] | string {
  const winners: string[] = [];
  let minScore: number = players[0].totalScore;

  for (const player of players) {
    if (player.totalScore % 1 !== 0) {
      return 'Invalid number in totalScore property';
    }
    if (player.totalScore < minScore) {
      minScore = player.totalScore;
    }
  }

  for (const player of players) {
    if (player.totalScore === minScore) {
      winners.push(player.player);
    }
  }

  return winners;
}
