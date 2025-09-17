// components/Modal.jsx
import React from "react";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="popup p-6 rounded-lg shadow-lg relative w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-black"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
