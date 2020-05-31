/**
 * @format
 */

import 'react-native';
import React from 'react';
import MockAsyncStorage from 'mock-async-storage';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const mockImpl = new MockAsyncStorage()
jest.mock('@react-native-community/async-storage', () => mockImpl);

it('renders correctly', () => {
  renderer.create(<App />);
});
