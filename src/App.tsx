import React, { useState } from 'react';
import './Coin.css';
import Coin from './Coin';
import Score from './Score';

const App: React.FC = () => {
  const [count, setCount] = useState(0);//изначальный счет 0

  const handleClick = () => {
    setCount(count + 1);//при клике на монетку счет увеличивается на 1
  };

  return (
    <div className="coin-container">
      <h1>Click the Coin!</h1>
      <Score count={count} />
      <Coin onClick={handleClick} />
    </div>
  );
};

export default App;
