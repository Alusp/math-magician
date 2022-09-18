import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorScreen from '../pages/CalculatorScreen';
import '@testing-library/jest-dom';

describe('Test CalculatorScreen', () => {
  test('Testing CalculatorScreen', () => {
    const tree = renderer.create(<CalculatorScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
