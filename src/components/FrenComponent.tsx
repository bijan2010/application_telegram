import React from "react";

const FrenComponent: React.FC = () => {
  const handleInvite = () => {
    const referralLink = "https://t.me/yourapp_bot?start=referralCode";
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div className="fren-container">
      <h2>Invite Frens</h2>
      <p>Earn rewards for inviting friends!</p>
      <button onClick={handleInvite}>Invite a Fren</button>
    </div>
  );
};

export default FrenComponent;
