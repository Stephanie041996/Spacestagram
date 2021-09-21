import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ImageList from '../../components/ImageList';
import store from '../../Store';

afterEach(cleanup);

it('should render the images', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <ImageList />
      </BrowserRouter>
    </Provider>,
  );
  expect(
    asFragment(
      <Provider store={store}>
        <ImageList />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
