import { PlayerScore } from '../model/golf.model';
import { scoreBoard } from '../service/scoreBoard';

describe('scoreBoard()', () => {
  describe('จัดอันดับคะแนน', () => {
    it('ต้องเรียงรายชื่อผู้เล่นตามคะแนน จากน้อยไปมาก', () => {
      // Arrange
      const players: PlayerScore[] = [
        { player: 'Win', totalScore: 2 },
        { player: 'Meng', totalScore: -1 },
        { player: 'Big', totalScore: 0 },
        { player: 'Faris', totalScore: -1 },
      ];
      const expectedResult = [
        { player: 'Meng', totalScore: -1 },
        { player: 'Faris', totalScore: -1 },
        { player: 'Big', totalScore: 0 },
        { player: 'Win', totalScore: 2 },
      ];

      // Act
      const result = scoreBoard(players);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('ต้องเรียงรายชื่อผู้เล่นตามเดิม ถ้าคะแนนเรียงจากน้อยไปมากอยู่ก่อนแล้ว', () => {
      // Arrange
      const players: PlayerScore[] = [
        { player: 'Win', totalScore: -2 },
        { player: 'Meng', totalScore: -1 },
        { player: 'Big', totalScore: 0 },
        { player: 'Faris', totalScore: 1 },
      ];
      const expectedResult = [
        { player: 'Win', totalScore: -2 },
        { player: 'Meng', totalScore: -1 },
        { player: 'Big', totalScore: 0 },
        { player: 'Faris', totalScore: 1 },
      ];

      // Act
      const result = scoreBoard(players);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('ต้องเรียงรายชื่อผู้เล่นตามเดิม ถ้าทุกคนมีคะแนนเท่ากันหมด', () => {
      // Arrange
      const players: PlayerScore[] = [
        { player: 'Win', totalScore: 2 },
        { player: 'Meng', totalScore: 2 },
        { player: 'Big', totalScore: 2 },
        { player: 'Faris', totalScore: 2 },
      ];
      const expectedResult = [
        { player: 'Win', totalScore: 2 },
        { player: 'Meng', totalScore: 2 },
        { player: 'Big', totalScore: 2 },
        { player: 'Faris', totalScore: 2 },
      ];

      // Act
      const result = scoreBoard(players);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe('Alternative Cases', () => {
    it('ต้องได้ Error "Invalid number in totalScore property" ถ้า totalScore ไม่เป็นจำนวนเต็ม', () => {
      // Arrange
      const players: PlayerScore[] = [
        { player: 'Win', totalScore: 2 },
        { player: 'Meng', totalScore: -1 },
        { player: 'Big', totalScore: 0.5 },
        { player: 'Faris', totalScore: -1 },
      ];

      // Act & Assert
      expect(() => scoreBoard(players)).toThrow(
        'Invalid number in totalScore property',
      );
    });
  });
});
