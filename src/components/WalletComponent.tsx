import React from "react";

const WalletComponent: React.FC = () => {
  const handleConnectWallet = () => {
    window.open("ton://connect", "_blank");
  };

  return (
    <div className="wallet-container">
      <h2>Connect Your Wallet</h2>
      <button onClick={handleConnectWallet}>Connect Tonkeeper</button>
    </div>
  );
};

export default WalletComponent;
