import React, { useState } from 'react';
import './Coin.css';

interface CoinProps {
  onClick: () => void;
}

const Coin: React.FC<CoinProps> = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true); // устанавливаем флаг клика в true
    onClick(); // вызываем переданный обработчик клика
    setTimeout(() => {
      setIsClicked(false); // возвращаем состояние клика в false
    }, 150);
  };

  return (
    <div className="coin-container">
      <img
        src="https://i.postimg.cc/QxR3PJRQ/coin.png"
        alt="Coin"
        className={`coin-image ${isClicked ? 'coin-clicked' : ''}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default Coin;
