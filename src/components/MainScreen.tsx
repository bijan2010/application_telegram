import React, { useState } from "react";
import FrenComponent from "./FrenComponent"; 
import WalletComponent from "./WalletComponent"; 

const MainScreen: React.FC = () => {
  const [showFren, setShowFren] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  const handleFrenClick = () => {
    setShowFren(true);
    setShowWallet(false);
  };

  const handleWalletClick = () => {
    setShowWallet(true);
    setShowFren(false);
  };

  return (
    <div className="main-container">
      <div className="header">
        <h1>29,857,775 Coins</h1>
        <h2>Gold</h2>
      </div>

      <div className="buttons">
        <button onClick={handleFrenClick}>Frens</button>
        <button>Earnings</button>
        <button onClick={handleWalletClick}>Wallet</button>
      </div>

      <div className="content">
        {showFren && <FrenComponent />}
        {showWallet && <WalletComponent />}
      </div>
    </div>
  );
};

export default MainScreen;
