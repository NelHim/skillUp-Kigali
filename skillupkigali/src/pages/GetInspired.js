import React from "react";
import Story from "../components/UI/Story";

function GetInspired() {
  return (
    <div className="mx-20 mt-20">
      <h1 className="text-center text-2xl font-semibold">
        Learn how other entreprenuers did it
      </h1>
      <div className="mt-5">
        <Story />
      </div>
    </div>
  );
}

export default GetInspired;
