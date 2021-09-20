import axios from 'axios';

export const GetImageList = () => async (dispatch) => {
  try {
    dispatch({
      type: 'IMAGE_LIST_LOADING',
    });


    var todayDate = new Date().toISOString().slice(0, 10);

    const res = await axios.get(`https://api.nasa.gov/planetary/apod?start_date=2021-08-01&end_date=${todayDate}&api_key=1dtDkMo03NippjXF7dWl8IiIIOAikOPXTFt9gApt`);

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