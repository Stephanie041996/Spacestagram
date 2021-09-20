import React from 'react'
import "../Style/Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class LikeButton extends React.Component {
    state = {
        likes: 0
      };
     

      addLike = () => {
        let newCount = this.state.likes + 1;
          this.setState({
          likes: newCount
        });
      };

    render() {
         const element1 =<FontAwesomeIcon icon={faHeart}/>
        const element = <FontAwesomeIcon icon={faHeart} style={{ color: "red" }}/>;
        const likes = this.state.likes;
        if (likes === 0) {
          return (
            <div className="card-like-bar">
              <button className="card-like-icon" onClick={this.addLike} id={this.props.itemId}>{element1}</button>

                <div className="like-text">
               <b>Likes: {this.state.likes}</b>

            </div>
            </div>
          );
        }
     
        if (likes ===1 || likes > 1) {
          return (
            <div className="card-like-bar">
            <button className="card-like-icon" onClick={this.addLike} id={this.props.itemId}>{element }</button>

            <div className="like-text">
           <b>Likes: {this.state.likes}</b>

        </div>
        </div>
          );
        }
      }
    }
    export default LikeButton