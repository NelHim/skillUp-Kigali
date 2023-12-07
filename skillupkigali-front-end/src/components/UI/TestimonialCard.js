import React from "react";

function TestimonialCard({ name, text }) {
  return (
    <div className="text-sm italic bg-blue-100 rounded-md p-6 shadow-2xl">
          <h1 className="font-medium">{name}</h1>
      <p className="mt-2">
        {text}
      </p>
    </div>
  );
}

export default TestimonialCard;
