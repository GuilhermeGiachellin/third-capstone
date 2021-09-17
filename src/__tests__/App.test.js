import React from 'react';
import { Provider } from 'react-redux';
import {
  render, screen,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';

describe('Test Nav title render', () => {
  test('Render nav title', async () => {
    const { debug } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    debug();
    expect(screen.getByText(/AOE2:DE Top 10/i)).toBeInTheDocument();
  });
});

describe('Sanpshoot of the whole app', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
