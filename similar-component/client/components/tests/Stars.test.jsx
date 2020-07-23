import React from 'react';
import renderer from 'react-test-renderer';

import Stars from '../Stars.jsx';


describe('Stars', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Stars />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});