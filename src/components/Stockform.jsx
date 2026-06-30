import React, { useState } from "react";

const Stockform = () => {
  const [message, setMessage] = useState("");

  const handleScaleTest = () => {
    setMessage("Scale test button clicked!");
    console.log("Scale test button clicked");
  };

  return (
    <div className="bg-gray-800 w-screen h-screen text-white flex flex-col items-center justify-center gap-4 text-3xl">
      <div>Stock Form Page</div>

      <div>
        <p>This is new information</p>
        <p>This is new information2</p>
        <p>This is new information2</p>
        <p>Added again the information regarding new testing</p>
      </div>

      <div>
        <button
          onClick={handleScaleTest}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open the scale test
        </button>
      </div>

      {message && (
        <div className="text-green-400 text-lg">
          {message}
        </div>
      )}

      <div>
        <p>This table is for displaying stock information 2</p>
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Header 1</th>
              <th className="border border-gray-300 px-4 py-2">Header 2</th>
              <th className="border border-gray-300 px-4 py-2">Header 3</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Stockform;