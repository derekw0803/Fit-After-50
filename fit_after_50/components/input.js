// components/ui/Input.js
import React from "react";

export function Input({ ...props }) {
  return (
    <input
      {...props}
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
