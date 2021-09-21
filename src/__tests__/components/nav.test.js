import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../../components/nav';
import store from '../../Store';

afterEach(cleanup);

it('should render the navbar', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </Provider>,
  );
  expect(
    asFragment(
      <Provider store={store}>
        <Nav />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
