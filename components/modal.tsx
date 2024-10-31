"use client";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Book a Tour</h2>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-3 border rounded"
          />
       <input
            type="date"
            className="w-full p-2 mb-3 border rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Book a Tour
          </button>
        </form>
        <button onClick={onClose} className="text-red-500 mt-4">Close</button>
      </div>
    </div>
  );
};

export default Modal;
