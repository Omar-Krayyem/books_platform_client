import '../Recommended/style.css';
import Nav from '../../components/Nav/index';
import Footer from '../../components/Footer/index';
import Card from '../../components/Card/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Recommended = () => {

    const [books, setBooks] = useState([]);

    const getRecipes = async () => {
        const token = localStorage.getItem("token");
    
        await axios.get(`http://127.0.0.1:5000/books/getRecommended`, {
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
        <div className='Recommended'>
            <div className='Upp'>
                <div className='Recommended_Nav'><Nav/></div>
                <div className='Recommended_Body'>
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
                            user_id={book.user._id}
                            new_image_url={book.new_image_url}
                            isLiked={book.isLikedByUser}
                            isFollowing = {'true'}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            <div className='Recommended_Footer'><Footer/></div>
        </div>
    );
}

export default Recommended;