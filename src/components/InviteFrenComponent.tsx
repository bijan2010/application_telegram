const InviteFrenComponent = ({ handleClose }: { handleClose: () => void }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Invite a Fren</h2>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
          Send in Telegram
        </button>
        <button className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg">
          Copy Link
        </button>
        <button onClick={handleClose} className="mt-4 text-red-500 py-2 px-4 rounded-lg">
          Close
        </button>
      </div>
    );
  };
  
  export default InviteFrenComponent;
  