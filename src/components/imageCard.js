import React from 'react'
import "../Style/Card.css";
import LikeButton from './Button';

const ImageCard = (props) =>{

return (
    <>
     <div className="card" data-testid="mySpan">
      <div className="card-header">
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-date">{props.date}</div>
        </div>
      </div>
      <img className="card-image" src={props.url} alt="LostImage" />
      <div className="card-text">{props.explanation}</div>
      <div className="card-like-bar">
      <LikeButton itemId={props.id} />
      </div>
    
   
    </div>
  
</>)
}
export default ImageCard;