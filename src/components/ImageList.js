import _ from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetImageList } from '../actions/imageActions';
import '../Style/ImageList.css';
import ImageCard from './imageCard';
import Nav from './nav';

const ImageList = () => {
  const dispatch = useDispatch();
  const imageList = useSelector((state) => state.ImageList);

  const FetchData = () => {
    dispatch(GetImageList());
  };

  React.useEffect(() => {
    FetchData();
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(imageList.data)) {
      return (
        <div className="list-wrapper">
          {imageList.data.map((el, t) => (
            <div className="column" key={t.date}>

              <ImageCard
                title={el.title}
                date={el.date}
                url={el.url}
                explanation={el.explanation}
                id={t.date}
              />

            </div>
          ))}
        </div>
      );
    }
    if (imageList.loading) {
      return (
        <>

          <div className="loadingio-spinner-spinner-42jc9me6ch">
            <div className="ldio-ql2ovzsg3s9">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
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
      <Nav />
      {ShowData()}
    </div>
  );
};

export default ImageList;
