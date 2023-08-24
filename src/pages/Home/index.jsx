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
    
        await axios.get(`http://127.0.0.1:5000/books/GetAll`, {
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
                        <Card id={book.user.id} name={book.name} author={book.author} genre={book.genre} review={book.review} new_image_url={book.new_image_url}/>
                    ))}
                    </div>
                </div>
            </div>
            
            <div className='Home_Footer'><Footer/></div>
        </div>
    );
}

export default Home;