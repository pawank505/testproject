import React from "react";

const Stockform = () => {
  return (
    <div className="bg-gray-800 w-screen h-screen text-white flex items-center justify-center text-3xl">
      Stock Form Page
      <div>
        <p>This is new information</p>
        <p>This is new information2</p>
        <p>This is new information2</p>
        <p>Added again the information regarding new testing</p>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Open the scale test
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Close the scale test
        </button>
      </div>
    </div>
  );
};

export default Stockform;
