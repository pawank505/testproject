import React, { useState } from 'react';

const Serious = () => {
  const [count, setCount] = useState(0);

  const users = [
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Serious Component
        </h1>

        <p className="mb-2 text-gray-600">
          This is a serious component with some dummy Tailwind CSS content.
        </p>

        <p className="mb-6 text-gray-500">
          This is new information displayed inside the component.
        </p>

        {/* Counter Section */}
        <div className="mb-6 rounded-lg border border-gray-200 p-4">
          <h2 className="mb-2 text-xl font-semibold">Counter Demo</h2>
          <p className="mb-3">Current Count: {count}</p>

          <div className="flex gap-3">

            <button
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Decrement
            </button>
          </div>
        </div>

        {/* User Cards */}
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-semibold">Team Members</h2>

          <div className="grid gap-4 md:grid-cols-3">
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serious;