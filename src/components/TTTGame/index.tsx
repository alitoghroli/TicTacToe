import React from 'react';
import Play from '../Play';

interface MyProps {}

interface MyState {}

class TTTGame extends React.Component<MyProps, MyState> {
  play() {
    return <Play />;
  }

  render() {
    return <div>{this.play()}</div>;
  }
}

export default TTTGame;
