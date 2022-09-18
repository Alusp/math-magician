import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../pages/HomeScreen';
import '@testing-library/jest-dom';

describe('Test HomeScreen', () => {
  test('Testing HomeScreen', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
