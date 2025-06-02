import { totalScore } from '../service/totalScore';

describe('totalScore()', () => {
  describe('คำนวณคะแนนรวมของทุกหลุม', () => {
    it('ต้องได้คะแนนรวมทั้งหมด', () => {
      // Arrange
      const scores = [2, 0, -1, 3, 0, 0, -2, 1];
      const expectedResult = 3;

      // Act
      const result = totalScore(scores);

      // Assert
      expect(result).toBe(expectedResult);
    });

    it('ต้องได้ 3 คะแนน ถ้า scores มีค่าเท่ากับ [-2,-1,0,1,2,3]', () => {
      // Arrange
      const scores = [-2, -1, 0, 1, 2, 3];
      const expectedResult = 3;

      // Act
      const result = totalScore(scores);

      // Assert
      expect(result).toBe(expectedResult);
    });

    it('ต้องได้ 0 คะแนน เมื่อ scores มีค่าเป็น 0 ทั้งหมดใน array', () => {
      // Arrange
      const scores = [0, 0, 0, 0, 0, 0, 0];
      const expectedResult = 0;

      // Act
      const result = totalScore(scores);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });

  describe('Alternative Cases', () => {
    it('ต้องได้ Error "Score must be integer number and possible lowest value is -4" เมื่อ scores มีค่าไม่เป็นจํานวนเต็ม หรือมีค่าน้อยกว่า -4', () => {
      // Arrange
      const scores = [-6, 1.5, 3, 0, -1];

      // Act & Assert
      expect(() => totalScore(scores)).toThrow(
        'Score must be integer number and possible lowest value is -4',
      );
    });
  });
});
