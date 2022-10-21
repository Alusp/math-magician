import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <>
      <div className="py-6 px-16 shadow-lg flex justify-between">
        <Link to="/" className="text-3xl font-semibold text-orange-500">
          Math Magician
        </Link>
        <div className="flex">
          <Link to="/" exact className="mx-6 hover:text-orange-500 text-xl">
            Home
          </Link>
          <Link to="/calculator" exact className="mx-6 hover:text-orange-500 text-xl">
            Calculator
          </Link>
          <Link to="/quote" exact className="ml-6 hover:text-orange-500 text-xl">
            Quotes
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
