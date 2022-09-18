import React from 'react';
import renderer from 'react-test-renderer';
import NavigationBar from '../components/NavigationBar';
import '@testing-library/jest-dom';

describe('Test NavigationBar', () => {
  test('Testing NavigationBar', () => {
    const tree = renderer.create(<NavigationBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
