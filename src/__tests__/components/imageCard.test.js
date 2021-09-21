import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import  ImageCard from '../../components/imageCard';
import store from '../../Store';

afterEach(cleanup);

it('should render the image Card', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <ImageCard />
      </BrowserRouter>
    </Provider>,
  );
  expect(
    asFragment(
      <Provider store={store}>
        <ImageCard />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
