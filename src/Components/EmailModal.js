import React from "react";

const Modal = ({ isOpen, close, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <div>{children}</div>
        <button
          onClick={close}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
