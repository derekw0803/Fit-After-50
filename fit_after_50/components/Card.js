// components/ui/Card.js
import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`${className} shadow-md rounded-lg p-6 bg-white`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}
