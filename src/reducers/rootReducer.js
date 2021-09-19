import { combineReducers } from 'redux';
import ImageListReducer from './ImageListReducer';

const RootReducer = combineReducers({
  ImageList: ImageListReducer,

});

export default RootReducer;
