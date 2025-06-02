import { PlayerScore } from '../model/golf.model';
import { summary } from '../service/summary';

describe('summary()', () => {
  describe('สรุปผล', () => {
    it('ต้องได้ชื่อผู้ชนะ ถ้าคะแนนเรียงจากน้อยไปมาก และมีผู้ชนะคนเดียว', () => {
      // Arrange
      const players: PlayerScore[] = [
        { player: 'Meng', totalScore: -1 },
        { player: 'Faris', totalScore: 0 },
        { player: 'Big', totalScore: 0 },
        { player: 'Win', totalScore: 2 },
      ];

      const expectedResult = ['Meng'];

      // Act
      const result = summary(players);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it('ต้องได้รายชื่อผู้ชนะ ถ้าคะแนนเรียงจากน้อยไปมาก และมีผู้ชนะมากกว่า 1 คน', () => {
      // Arrange
      const players: PlayerScore[] = [
        { player: 'Meng', totalScore: -1 },
        { player: 'Faris', totalScore: -1 },
        { player: 'Big', totalScore: 0 },
        { player: 'Win', totalScore: 2 },
      ];

      const expectedResult = ['Meng', 'Faris'];

      // Act
      const result = summary(players);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it('ต้องได้ชื่อหรือรายชื่อผู้ชนะ ถ้าคะแนนไม่ได้เรียง', () => {
      // Arrange
      const players: PlayerScore[] = [
        { player: 'Win', totalScore: 2 },
        { player: 'Meng', totalScore: -1 },
        { player: 'Big', totalScore: 0 },
        { player: 'Faris', totalScore: -1 },
      ];

      const expectedResult = ['Meng', 'Faris'];

      // Act
      const result = summary(players);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it('ต้องได้รายชื่อทุกคนเป็นผู้ชนะ ถ้าทุกคนมีคะแนนเท่ากัน', () => {
      // Arrange
      const players: PlayerScore[] = [
        { player: 'Win', totalScore: -1 },
        { player: 'Meng', totalScore: -1 },
        { player: 'Big', totalScore: -1 },
        { player: 'Faris', totalScore: -1 },
      ];

      const expectedResult = ['Win', 'Meng', 'Big', 'Faris'];

      // Act
      const result = summary(players);

      // Assert
      expect(result).toStrictEqual(expectedResult);
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
      expect(() => summary(players)).toThrow(
        'Invalid number in totalScore property',
      );
    });
  });
});
