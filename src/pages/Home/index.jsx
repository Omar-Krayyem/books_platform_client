import '../Home/style.css';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import Card from '../../components/Card/index';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const [books, setBooks] = useState([]);

    const getRecipes = async () => {
        const token = localStorage.getItem("token");
    
        await axios.get(`http://127.0.0.1:5000/books/getAll`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data);
            setBooks(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      };
    
      useEffect(() => {
        getRecipes();
      }, []);

    return (
        <div className='Home'>
            <div className='Upp'>
                <div className='Home_Nav'><Nav/></div>
                <div className='Home_Body'>
                    <div className="cards_container">
                    {books.map((book) => (
                        <Card 
                        key = {book._id}
                        id={book._id} 
                        title={book.title} 
                        author={book.author} 
                        genre={book.genre} 
                        review={book.review} 
                        likeCount={book.likeCount}
                        username={book.user.username}
                        new_image_url={book.new_image_url}
                        isLiked={book.isLikedByUser}
                        isFollowing = {book.isFollowingAuthor}
                        />
                    ))}
                    </div>
                </div>
            </div>
            
            <div className='Home_Footer'><Footer/></div>
        </div>
    );
}

export default Home;