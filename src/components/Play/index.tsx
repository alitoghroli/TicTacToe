import React, { useState } from 'react';

import XSrc from '../../assets/img/X.png';
import OSrc from '../../assets/img/O.png';
import WhiteSrc from '../../assets/img/white.png';

import Result from './methods/Result';
import Navigation from '../layout/Navigation';

const Play = () => {
  const [moves, setMoves] = useState<string[]>(Array(9).fill(''));
  const [xWins, SetXWins] = useState(0);
  const [oWins, SetOWins] = useState(0);
  const clickHandller = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    index: number
  ) => {
    //set input x
    let temp = [...moves];
    if (temp[index] === '') {
      temp[index] = 'X';
      setMoves(temp);
      const { result, end } = Result(temp);
      if (!end) {
        //O move if game not end
        if (result === '') {
          console.log('Draw');
          alert('X Draw O');
          temp.fill('');
          setMoves(temp);
        } else {
          temp[parseInt(result) - 1] = 'O';
          setMoves(temp);
        }
      } else {
        // end game
        if (result === 'X') {
          let temp = xWins;
          temp += 1;
          SetXWins(temp);
          console.log('Xwins:  ' + temp);
        }

        if (result === 'O') {
          let temp = oWins;
          temp += 1;
          SetOWins(temp);
          console.log('Owins:  ' + temp);
        }
        console.log(result);
        alert(result + ' Winner!');
        temp.fill('');
        setMoves(temp);
      }
    }
  };

  const makeSrc = (index: number) => {
    switch (moves[index]) {
      case 'X':
        return XSrc;
      case 'O':
        return OSrc;
      default:
        return WhiteSrc;
    }
  };

  console.log(moves);
  return (
    <div>
      <Navigation OWins={oWins} XWins={xWins} />
      <div className="board">
        <div className="board_row">
          <div className="board_row--cell">
            {moves.map((value, index) => {
              return (
                <img
                  className="Cell"
                  src={makeSrc(index)}
                  alt={value}
                  key={index}
                  onClick={(event) => clickHandller(event, index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
