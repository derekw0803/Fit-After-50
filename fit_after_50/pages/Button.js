// components/ui/Button.js
import React from "react";

export function Button({ children, ...props }) {
  return (
    <button {...props} className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
      {children}
    </button>
  );
}
