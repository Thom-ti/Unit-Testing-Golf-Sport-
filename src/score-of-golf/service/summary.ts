import { PlayerScore } from '../model/golf.model';

export function summary(players: PlayerScore[]): string[] | Error {
  const winners: string[] = [];
  let minScore: number = players[0].totalScore;

  for (const player of players) {
    if (player.totalScore % 1 !== 0) {
      throw new Error('Invalid number in totalScore property');
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
