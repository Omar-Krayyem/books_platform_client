import '../Card/style.css';
// import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = (props) => {

    // let [name, setName] = useState("Atomic Habit");
    // let [author, setAuthor] = useState("Omar krayyem");
    // let [genre, setGenre] = useState("Self-help");
    // let [review, setReview] = useState("A transformative guide to building good habits.A transformative guide to building good habits.");
    // let [image, setImage] = useState("https://teambuilding.com/wp-content/uploads/2021/08/atomic-habits.jpg");

    return (
        <div id="card" class="card">
            <div class="face front">
                <div class="card_img">
                    <img src="https://teambuilding.com/wp-content/uploads/2021/08/atomic-habits.jpg" alt="Book Cover"></img>
                </div>
            </div>
            <div class="face back">
                <div className="abov">
                    <div class="card_title">
                        <h3>{props.name}</h3>
                        <p>by {props.username}</p>
                    </div>
                    <div class="card_details">
                            <h4>Genre: {props.genre}</h4>
                            <h4>Review:</h4>
                            <p>{props.review}</p>
                    </div>
                </div>
                <div className="below">
                    <h3>follow</h3>
                    <h3> 20 likes</h3>
                </div>
            </div>  
        </div>
    );
}

export default Card;