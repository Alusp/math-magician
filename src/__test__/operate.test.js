import operate from '../logic/operate';

describe('It should operate unit test', () => {
  test('Testing Addition', () => {
    const numberOne = '2';
    const numberTwo = '3';
    const operation = '+';
    expect(operate(numberOne, numberTwo, operation)).toEqual('5');
  });

  test('Testing Subtraction', () => {
    const numberOne = '2';
    const numberTwo = '3';
    const operation = '-';
    expect(operate(numberOne, numberTwo, operation)).toEqual('-1');
  });

  test('Testing Division', () => {
    const numberOne = '8';
    const numberTwo = '4';
    const operation = '÷';
    expect(operate(numberOne, numberTwo, operation)).toEqual('2');
  });

  test('Testing multiplication', () => {
    const numberOne = '2';
    const numberTwo = '3';
    const operation = 'x';
    expect(operate(numberOne, numberTwo, operation)).toEqual('6');
  });
});
