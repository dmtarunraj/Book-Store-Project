import React from 'react';

const Header = ({ setShowType }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-200 p-4 z-10">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Library</div>
        <div className="flex gap-x-4">
          <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType('table')}>
            Table
          </button>
          <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType('card')}>
            Card
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
