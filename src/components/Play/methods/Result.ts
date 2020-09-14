const Result = (Moves: string[]) => {
  let end = false;
  let result = '';
  const WinTemplate = [
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
  ];
  const Xluck = Array(8).fill(0);
  const Oluck = Array(8).fill(0);

  const sampleWin = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  //Create lucks
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 3; j++) {
      sampleWin[i][j] = Moves[parseInt(WinTemplate[i][j]) - 1];
      switch (sampleWin[i][j]) {
        case 'X':
          Xluck[i] += 1;
          break;
        case 'O':
          Oluck[i] += 1;
          break;
      }
    }
  }
  //Check O win
  for (let i = 0; i < 8; i++) {
    if (Oluck[i] - Xluck[i] === 3) {
      end = true;
      result = 'O';
      return { result, end };
    }
  }
  //Check X win
  for (let i = 0; i < 8; i++) {
    if (Xluck[i] - Oluck[i] === 3) {
      end = true;
      result = 'X';
      return { result, end };
    }
  }

  //GoldenMove
  for (let i = 0; i < 8; i++) {
    if (Oluck[i] - Xluck[i] === 2) {
      sampleWin[i].map((value, index) => {
        if (value === '') {
          result = WinTemplate[i][index];
        }
      });
      return { result, end };
    }
  }
  //DefMove
  for (let i = 0; i < 8; i++) {
    if (Xluck[i] - Oluck[i] === 2) {
      sampleWin[i].map((value, index) => {
        if (value === '') {
          result = WinTemplate[i][index];
        }
      });
      return { result, end };
    }
  }

  //random Move
  for (let i = 0; i < 8; i++) {
    let rand: string[] = [];
    if (Xluck[i] === 1) {
      if (Oluck[i] === 0) {
        sampleWin[i].map((value, index) => {
          if (value === '') {
            rand.push(WinTemplate[i][index]);
          }
        });

        result = rand[Math.floor(Math.random() * rand.length)];
        if (i > 5) {
          if (sampleWin[i][1] === '') {
            result = WinTemplate[i][1];
          }
        }
        if (result !== '' && i === 7) {
          return { result, end };
        }
      }
    }
  }

  return { result, end };
};

export default Result;
