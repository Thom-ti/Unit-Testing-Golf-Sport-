import { ScoreReport } from '../model/golf.model';
import { scoreOfHole } from '../service/scoreOfHole';

describe('scoreOfHole()', () => {
  describe('คำนวณคะแนนของหลุมและแสดงผล message ถูกต้อง', () => {
    it("ต้องได้ 'Albatross' เมื่อคะแนนของหลุมเป็น -3", () => {
      // Arrange
      const par = 6;
      const strokes = 3;
      const expectedResult: ScoreReport = {
        score: -3,
        message: 'Albatross',
      };

      // Act
      const result = scoreOfHole(par, strokes);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it("ต้องได้ 'Eagle' เมื่อคะแนนของหลุมเป็น -2", () => {
      // Arrange
      const par = 3;
      const strokes = 1;
      const expectedResult: ScoreReport = {
        score: -2,
        message: 'Eagle',
      };

      // Act
      const result = scoreOfHole(par, strokes);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it("ต้องได้ 'Birdie' เมื่อคะแนนของหลุมเป็น -1", () => {
      // Arrange
      const par = 4;
      const strokes = 3;
      const expectedResult: ScoreReport = {
        score: -1,
        message: 'Birdie',
      };

      // Act
      const result = scoreOfHole(par, strokes);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it("ต้องได้ 'Par' เมื่อคะแนนของหลุมเป็น 0", () => {
      // Arrange
      const par = 6;
      const strokes = 6;
      const expectedResult: ScoreReport = {
        score: 0,
        message: 'Par',
      };

      // Act
      const result = scoreOfHole(par, strokes);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it("ต้องได้ 'Bogey' เมื่อคะแนนของหลุมเป็น 1", () => {
      // Arrange
      const par = 4;
      const strokes = 5;
      const expectedResult: ScoreReport = {
        score: 1,
        message: 'Bogey',
      };

      // Act
      const result = scoreOfHole(par, strokes);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it("ต้องได้ 'Double Bogey' เมื่อคะแนนของหลุมเป็น 2", () => {
      // Arrange
      const par = 5;
      const strokes = 7;
      const expectedResult: ScoreReport = {
        score: 2,
        message: 'Double Bogey',
      };

      // Act
      const result = scoreOfHole(par, strokes);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it("ต้องได้ 'Triple Bogey' เมื่อคะแนนของหลุมเป็น 3", () => {
      // Arrange
      const par = 3;
      const strokes = 6;
      const expectedResult: ScoreReport = {
        score: 3,
        message: 'Triple Bogey',
      };

      // Act
      const result = scoreOfHole(par, strokes);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it("ต้องได้ 'Quadruple Bogey' เมื่อคะแนนของหลุมเป็น 4", () => {
      // Arrange
      const par = 5;
      const strokes = 9;
      const expectedResult: ScoreReport = {
        score: 4,
        message: 'Quadruple Bogey',
      };

      // Act
      const result = scoreOfHole(par, strokes);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it("ต้องได้ 'Quintuple Bogey' เมื่อคะแนนของหลุมเป็น 5", () => {
      // Arrange
      const par = 6;
      const strokes = 11;
      const expectedResult: ScoreReport = {
        score: 5,
        message: 'Quintuple Bogey',
      };

      // Act
      const result = scoreOfHole(par, strokes);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it("ต้องได้ '+N' เมื่อจำนวน score มากกว่า 5", () => {
      // Arrange
      const par = 3;
      const strokes = 15;
      const expectedResult: ScoreReport = {
        score: 12,
        message: '+12',
      };

      // Act
      const result = scoreOfHole(par, strokes);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe('Alternative Cases', () => {
    describe('Check Strokes', () => {
      it("ต้องได้ 'Invalid number of strokes' เมื่อจำนวน strokes ไม่เป็นจำนวนเต็มบวก", () => {
        // Arrange
        const par = 4;
        const strokes = 0;
        const expectedResult = 'Invalid number of strokes';

        // Act
        const result = scoreOfHole(par, strokes);

        // Assert
        expect(result).toBe(expectedResult);
      });
    });

    describe('Check Par', () => {
      it("ต้องได้ 'Invalid number of par' เมื่อจำนวน par ไม่เป็นจำนวนเต็มบวก", () => {
        // Arrange
        const par = -1.2;
        const strokes = 4;
        const expectedResult = 'Invalid number of par';

        // Act
        const result = scoreOfHole(par, strokes);

        // Assert
        expect(result).toBe(expectedResult);
      });

      it("ต้องได้ 'Par must be at least 3' เมื่อจำนวน par น้อยกว่า 3", () => {
        // Arrange
        const par = 1;
        const strokes = 2;
        const expectedResult = 'Par must be at least 3';

        // Act
        const result = scoreOfHole(par, strokes);

        // Assert
        expect(result).toBe(expectedResult);
      });
    });

    describe('Check Score', () => {
      describe('ถ้า par = 3,4,5 จะมี Min Score = -2', () => {
        it('ต้องได้ "Invalid number of score" เมื่อจำนวน score น้อยกว่า -2', () => {
          // Arrange
          const par = 5;
          const strokes = 1;
          const expectedResult = 'Invalid number of score';

          // Act
          const result = scoreOfHole(par, strokes);

          // Assert
          expect(result).toBe(expectedResult);
        });
      });

      describe('ถ้า par >= 6 จะมี Min Score = -3', () => {
        it('ต้องได้ "Invalid number of score" เมื่อจำนวน score น้อยกว่า -3', () => {
          // Arrange
          const par = 7;
          const strokes = 2;
          const expectedResult = 'Invalid number of score';

          // Act
          const result = scoreOfHole(par, strokes);

          // Assert
          expect(result).toBe(expectedResult);
        });
      });
    });
  });
});
