const DefualtState = {
    loading: false,
    data: [],
    errorMessage: '',
  
  };
  
  const ImageListReducer = (state = DefualtState, action) => {
    switch (action.type) {
      case 'IMAGE_LIST_LOADING':
        return {
          ...state,
          loading: true,
          errorMessage: '',
        };
      case 'IMAGE_LIST_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload,
          errorMessage: '',
        };
      case 'IMAGE_LIST_FAIL':
        return {
          ...state,
          loading: false,
          errorMessage: ' ERROR!! unable to get image info from Api Please reload',
        };
      default:
        return state;
    }
  };
  
  export default ImageListReducer;
  