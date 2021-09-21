import ImageListReducer from '../../reducers/ImageListReducer';

describe('Detail Reducer', () => {
  it('Checks if default state is returned', () => {
    const state = ImageListReducer(undefined, { type: '' });
    expect(state).toEqual({ data: [], loading: false, errorMessage: '' });
  });

  it('Checks if reducer is loading', () => {
    const state = ImageListReducer({ data: [], loading: true, errorMessage: '' }, { type: '' });
    expect(state).toEqual({ data: [], loading: true, errorMessage: '' });
  });
  it('Checks if reducer is not loading', () => {
    const state = ImageListReducer({ data: [], loading: true, errorMessage: '' }, { type: '' });
    expect(state).not.toEqual({ data: [], loading: false, errorMessage: '' });
  });
  it('Checks if reducer is Failed', () => {
    const state = ImageListReducer({ data: [], loading: false, errorMessage: 'Unable to get Cypto INFO' }, { type: '' });
    expect(state).toEqual({ data: [], loading: false, errorMessage: 'Unable to get Cypto INFO' });
  });
  it('Checks if reducer is  not Failed', () => {
    const state = ImageListReducer({ data: [], loading: true, errorMessage: '' }, { type: '' });
    expect(state).not.toEqual({ data: [], loading: false, errorMessage: 'Unable to get Cypto INFO' });
  });
  it('Checks if reducer is Successful', () => {
    const state = ImageListReducer({ data: [{ name: 'bitcoin' }], loading: false, errorMessage: '' }, { type: '' });
    expect(state).toEqual({ data: [{ name: 'bitcoin' }], loading: false, errorMessage: '' });
  });

  it('Checks if reducer is not Successful', () => {
    const state = ImageListReducer({ data: [], loading: false, errorMessage: '' }, { type: '' });
    expect(state).not.toEqual({ data: [{ name: 'bitcoin' }], loading: false, errorMessage: '' });
  });


});
