import {
  PlayerScore,
  saveScore,
  scoreBoard,
  scoreOfHole,
  ScoreReport,
  totalScore,
} from './golf';

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

describe('saveScore()', () => {
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

  describe('Alternative Cases', () => {
    it('ต้องได้ "Invalid number in score property" ถ้า scoreReport.score ไม่เป็นจำนวนเต็ม', () => {
      // Arrange
      const scoreReport: ScoreReport = {
        score: -3.5,
        message: 'Albatross',
      };
      const scores = [2, 1, -3, 0];
      const expectedResult = 'Invalid number in score property';

      // Act
      const result = saveScore(scoreReport, scores);

      // Assert
      expect(result).toBe(expectedResult);
    });

    it('ต้องได้ "Invalid number in score property" ถ้า scoreReport.score น้อยกว่า -3', () => {
      // Arrange
      const scoreReport: ScoreReport = {
        score: -4,
        message: 'Something',
      };
      const scores = [2, 1, -3, 0];
      const expectedResult = 'Invalid number in score property';

      // Act
      const result = saveScore(scoreReport, scores);

      // Assert
      expect(result).toBe(expectedResult);
    });

    it('ต้องได้ "Invalid number in scores" ถ้ามีค่าใน scores ไม่เป็นจำนวนเต็ม', () => {
      // Arrange
      const scoreReport: ScoreReport = {
        score: 3,
        message: 'Triple Bogey',
      };
      const scores = [2.5, 2, 0, 1, -3.75];
      const expectedResult = 'Invalid number in scores';

      // Act
      const result = saveScore(scoreReport, scores);

      // Assert
      expect(result).toBe(expectedResult);
    });

    it('ต้องได้ "Invalid number in scores" ถ้ามีค่าใน scores น้อยกว่า -3', () => {
      // Arrange
      const scoreReport: ScoreReport = {
        score: 3,
        message: 'Triple Bogey',
      };
      const scores = [2.5, 2, 0, 1, -3.75];
      const expectedResult = 'Invalid number in scores';

      // Act
      const result = saveScore(scoreReport, scores);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
});

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

    it('ต้องได้ "Score must be integer number and possible lowest value is -4" เมื่อ scores มีค่าไม่เป็นจํานวนเต็ม หรือมีค่าน้อยกว่า -4', () => {
      // Arrange
      const scores = [-6, 1.5, 3, 0, -1];
      const expectedResult =
        'Score must be integer number and possible lowest value is -4';

      // Act
      const result = totalScore(scores);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
});

describe('scoreBoard()', () => {
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

  it('ต้องได้ "Invalid number in totalScore property" ถ้า totalScore ไม่เป็นจำนวนเต็ม', () => {
    // Arrange
    const players: PlayerScore[] = [
      { player: 'Win', totalScore: 2 },
      { player: 'Meng', totalScore: -1 },
      { player: 'Big', totalScore: 0.5 },
      { player: 'Faris', totalScore: -1 },
    ];
    const expectedResult = 'Invalid number in totalScore property';

    // Act
    const result = scoreBoard(players);

    // Assert
    expect(result).toBe(expectedResult);
  });
});

describe('summary()', () => {});
