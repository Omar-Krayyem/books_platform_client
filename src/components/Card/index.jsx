import '../Card/style.css';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';4
import { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import axios from 'axios';

const Card = (props) => {

    const post_id = props.id;
    const token = localStorage.getItem("token");

    /////////////////////////////////////////////////////////////////////////////FOLLOW

    let [isFollowed, setIsFollowed] = useState(false);

    setIsFollowed = props.isFollowing;


    /////////////////////////////////////////////////////////////////////////////LIKE
    let [like, setLike] = useState('0');
    let [isLiked, setIsLiked] = useState(false);
    setLike = props.likeCount;

    

    const getLikes = async () => {
        await axios.get(`http://127.0.0.1:8000/api/like/count/${post_id}`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            // console.log(response.data.data);
            setLike(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    };

    const handleLikeBtn = () => {
        if (isLiked) {
            axios.delete(`http://127.0.0.1:8000/api/like/destroy/${post_id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                // console.log(response.data)
                setIsLiked(false);
                getLikes();
            })
            .catch(error => {
                console.log(error);
            });
        } else {
            const postData = { post_id};
            axios.post(`http://127.0.0.1:8000/api/like/store`, postData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                // console.log(response.data)
                setIsLiked(true);
                getLikes();
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

    return (
        <div id="card" className="card">
            <div className="face front">
                <div className="card_img">
                    <img src="https://teambuilding.com/wp-content/uploads/2021/08/atomic-habits.jpg" alt="Book Cover"></img>
                </div>
            </div>
            <div className="face back">
                <div className="abov">
                    <div className="card_title">
                        <h3>{props.title}</h3>
                        <p>by {props.username}</p>
                    </div>
                    <div className="card_details">
                            <h4>Genre: {props.genre}</h4>
                            <h4>Review:</h4>
                            <p>{props.review}</p>
                    </div>
                </div>
                <div className="below">
                    <h3 >{isFollowed ? 'unfollow' : 'follow'}</h3>
                    {/* <div  className={`likes ${isLiked ? 'liked' : ''}`}>{like}<FavoriteIcon className={`icon ${isLiked?'liked':''}`} onClick={handleLikeBtn}/></div> */}
                    <div className='likes'> {like} <AiFillLike className={`like_icon ${isLiked ? 'liked' : ''}`} onClick={handleLikeBtn}/></div>
                </div>
            </div>  
        </div>
    );
}

export default Card;