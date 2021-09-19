import axios from 'axios';

export const GetImageList = () => async (dispatch) => {
  try {
    dispatch({
      type: 'IMAGE_LIST_LOADING',
    });

    const res = await axios.get('https://api.nasa.gov/planetary/apod?start_date=2021-08-19&end_date=2021-09-19&api_key=1dtDkMo03NippjXF7dWl8IiIIOAikOPXTFt9gApt');
    dispatch({
      type: 'IMAGE_LIST_SUCCESS',
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: 'IMAGE_LIST_FAIL',
    });
  }
};