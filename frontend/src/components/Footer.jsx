import React from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-200 p-4 z-10">
      <div className="flex justify-between items-center">
        <p>&copy; 2024 Library App</p>
        <AiOutlineShareAlt className="text-2xl text-gray-800" />
      </div>
    </footer>
  );
};

export default Footer;
