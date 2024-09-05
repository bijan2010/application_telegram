// حذف خط import React from 'react';

const FrenComponent = ({ onInviteClick }: { onInviteClick: () => void }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Invite Frens</h2>
      <p>Earn rewards for inviting friends!</p>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
        onClick={onInviteClick}
      >
        Invite a Fren
      </button>
    </div>
  );
};

export default FrenComponent;
