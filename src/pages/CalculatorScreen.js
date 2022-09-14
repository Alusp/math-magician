import React from 'react';
import Calculator from '../components/Calculator';

function CalculatorScreen() {
  return (
    <div className="flex flex-row ">
      <div>
        <h1 className="container ml-14 text-2xl pt-32  font-semibold">Let us do some Maths!</h1>
      </div>
      <div className="container">
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorScreen;
