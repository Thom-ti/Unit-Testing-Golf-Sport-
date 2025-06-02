import { PlayerScore } from '../model/golf.model';

export function scoreBoard(players: PlayerScore[]): PlayerScore[] | Error {
  for (const player of players) {
    if (player.totalScore % 1 !== 0) {
      throw new Error('Invalid number in totalScore property');
    }
  }
  return players.sort((a, b) => a.totalScore - b.totalScore);
}
