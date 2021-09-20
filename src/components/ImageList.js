import _ from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetImageList } from '../actions/imageActions';
import './ImageList.css';

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

 console.log(imageList.data[0])

  const ShowData = () => {
    if (!_.isEmpty(imageList.data)) {
      return (
        // imageList.data[0].date
        imageList.data.map((el, t) => (
          <div>
                <img
          alt='image3'
          src={el.url}
        />
          <h3 key={t}>{el.title}</h3>
          <p key={t}>{el.date}</p>
          <p key={t}>{el.explanation}</p>
          </div>
        ))
         )
    }
    if (imageList.loading) {
      return( <>
    
      <div className="loadingio-spinner-spinner-42jc9me6ch"><div className="ldio-ql2ovzsg3s9">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
<h3>loading...</h3>
      </>
      );
    }
    if (imageList.errorMessage !== '') {
      return <p>{imageList.errorMessage}</p>;
    }
    return <h3>ERROR IN GETTING DATA. PLEASE CONTACT SUPPORT</h3>;
  };

  return (
    <div>
      {ShowData()}
    </div>
  );
};

export default ImageList;
