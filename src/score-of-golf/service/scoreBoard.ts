import { PlayerScore } from '../model/golf.model';

export function scoreBoard(players: PlayerScore[]): PlayerScore[] | string {
  for (const player of players) {
    if (player.totalScore % 1 !== 0) {
      return 'Invalid number in totalScore property';
    }
  }
  return players.sort((a, b) => a.totalScore - b.totalScore);
}
