import React from 'react';
import renderer from 'react-test-renderer';
import QoutesScreen from '../pages/QoutesScreen';
import '@testing-library/jest-dom';

describe('Test QoutesScreen', () => {
  test('Testing QoutesScreen', () => {
    const tree = renderer.create(<QoutesScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});