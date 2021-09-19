import _ from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetImageList } from '../actions/imageActions';

const ImageList = () => {
  const dispatch = useDispatch();
//   const test = 
  const imageList = useSelector((state) => state.ImageList);


  React.useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    dispatch(GetImageList());
  };

 console.log(imageList.data)

  const ShowData = () => {
    if (!_.isEmpty(imageList.data)) {
      return imageList.data.title

     

    
    
    }

    if (imageList.loading) {
      return <p>loading</p>;
    }
    if (imageList.errorMessage !== '') {
      return <p>{imageList.errorMessage}</p>;
    }
    return <p>Unable to get data</p>;
  };

  return (
    <div>
      {ShowData()}
    </div>
  );
};

export default ImageList;
