import React, { Component } from 'react';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      playerChoice: null,
      computerChoice: null,
      result: null,
    };
  }

  handleChoice = (choice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    this.setState({ playerChoice: choice, computerChoice }, this.determineWinner);
  };

  determineWinner = () => {
    const { playerChoice, computerChoice } = this.state;

    if (playerChoice === computerChoice) {
      this.setState({ result: 'It\'s a draw!' });
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      this.setState({ result: 'You win!' });
    } else {
      this.setState({ result: 'Computer wins!' });
    }
  };

  render() {
    const { playerChoice, computerChoice, result } = this.state;

    return (
      <div className="game">
        <h1>Rock, Paper, Scissors</h1>
        <div className="choices">
          <div className="choice" onClick={() => this.handleChoice('rock')}>
            Rock
          </div>
          <div className="choice" onClick={() => this.handleChoice('paper')}>
            Paper
          </div>
          <div className="choice" onClick={() => this.handleChoice('scissors')}>
            Scissors
          </div>
        </div>
        <div className="result">
          {playerChoice && <p>Your choice: {playerChoice}</p>}
          {computerChoice && <p>Computer's choice: {computerChoice}</p>}
          {result && <p>{result}</p>}
        </div>
      </div>
    );
  }
}

export default Game;