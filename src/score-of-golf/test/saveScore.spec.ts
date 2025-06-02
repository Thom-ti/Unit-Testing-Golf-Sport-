import { ScoreReport } from '../model/golf.model';
import { saveScore } from '../service/saveScore';

describe('saveScore()', () => {
  describe('บันทึกคะแนน', () => {
    it('ต้องเก็บคะแนนได้', () => {
      // Arrange
      const scoreReport: ScoreReport = {
        score: 1,
        message: 'Bogey',
      };
      const scores = [2, 1, -3, 0];
      const expectedResult = [2, 1, -3, 0, 1];

      // Act
      const result = saveScore(scoreReport, scores);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it('เก็บคะแนนหลุมแรกได้', () => {
      // Arrange
      const scoreReport: ScoreReport = {
        score: 0,
        message: 'Par',
      };
      const scores = [];
      const expectedResult = [0];

      // Act
      const result = saveScore(scoreReport, scores);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe('Alternative Cases', () => {
    it('ต้องได้ Error "Invalid number in score property" ถ้า scoreReport.score ไม่เป็นจำนวนเต็ม', () => {
      // Arrange
      const scoreReport: ScoreReport = {
        score: -3.5,
        message: 'Albatross',
      };
      const scores = [2, 1, -3, 0];

      // Act & Assert
      expect(() => saveScore(scoreReport, scores)).toThrow(
        'Invalid number in score property',
      );
    });

    it('ต้องได้ Error "Invalid number in score property" ถ้า scoreReport.score น้อยกว่า -3', () => {
      // Arrange
      const scoreReport: ScoreReport = {
        score: -4,
        message: 'Something',
      };
      const scores = [2, 1, -3, 0];

      // Act & Assert
      expect(() => saveScore(scoreReport, scores)).toThrow(
        'Invalid number in score property',
      );
    });

    it('ต้องได้ Error "Invalid number in scores" ถ้ามีค่าใน scores ไม่เป็นจำนวนเต็ม', () => {
      // Arrange
      const scoreReport: ScoreReport = {
        score: 3,
        message: 'Triple Bogey',
      };
      const scores = [2.5, 2, 0, 1, -3.75];

      // Act & Assert
      expect(() => saveScore(scoreReport, scores)).toThrow(
        'Invalid number in scores',
      );
    });

    it('ต้องได้ Error "Invalid number in scores" ถ้ามีค่าใน scores น้อยกว่า -3', () => {
      // Arrange
      const scoreReport: ScoreReport = {
        score: 3,
        message: 'Triple Bogey',
      };
      const scores = [2.5, 2, 0, 1, -3.75];

      // Act & Assert
      expect(() => saveScore(scoreReport, scores)).toThrow(
        'Invalid number in scores',
      );
    });
  });
});
