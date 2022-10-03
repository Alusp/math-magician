import calculate from '../logic/calculate';

describe('It should calculate unit test', () => {
  test('Testing operation', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: '+',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  test('Testing operation', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: '-',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({
      total: '-1',
      next: null,
      operation: null,
    });
  });

  test('Testing operation', () => {
    const obj = {
      total: '2',
      next: '3',
      operation: 'x',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toEqual({
      total: '6',
      next: null,
      operation: null,
    });
  });
});
