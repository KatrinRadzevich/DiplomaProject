import React from 'react';

interface ScoreProps {
  count: number;
}

const Score: React.FC<ScoreProps> = ({ count }) => {
  return <p className="score-container">Score: {count}</p>;
};

export default Score;
