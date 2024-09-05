const FrenComponent = ({ handleInviteClick }: { handleInviteClick: () => void }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Invite Frens</h2>
      <p>Earn rewards for inviting friends!</p>
      <button onClick={handleInviteClick} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
        Invite a Fren
      </button>
    </div>
  );
};

export default FrenComponent;
