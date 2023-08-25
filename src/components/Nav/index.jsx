import '../Nav/style.css';
import { NavLink } from "react-router-dom";
import AddBook from '../../components/AddBook/index';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Card from '../../components/Card/index';

const Nav = () => {

    function Logout (){
        localStorage.removeItem("token");
        window.location.href = '/';
    }

    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleAddButtonClick = () => {
        setPopupVisibility(true);
    }

    const [searchInput, setSearchInput] = useState("");
    let [searchedBooks, setSearchedBooks] = useState([]);

    useEffect(() => {
        console.log(searchInput);
        const token = localStorage.getItem("token");
    
        const getBooks = async () => {
            try {
                let { data } = await axios.get(`http://127.0.0.1:5000/books/search/${searchInput}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(data);
                setSearchedBooks(data);
                console.log(setSearchedBooks);
            } catch (error) {
                console.log(error);
            }
        };
    
        getBooks();
    
    }, [searchInput]);

    return (
        <div className='ALL_NAV'>
            <div className='nav'>
                {isPopupVisible && <AddBook onClose={() => setPopupVisibility(false)} />}
                <div className='leftSide'>
                    <NavLink className={'text_decoration'} to={'/Home'}><div className="logo"><h1>ReadConnect   </h1></div></NavLink>
                    <NavLink className={'text_decoration'} to={'/Recommended'}><div className="btn">Recommended</div></NavLink>
                    <div className="btn" onClick={handleAddButtonClick}>Add Book</div>
                </div>
                
                <div className='rightSide'>
                    <input 
                    type='text' 
                    className='searchbar' 
                    placeholder='Search books here...'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    ></input>
                    <div className="btn" onClick={Logout}>Logout</div>
                </div>
            </div>
            {searchInput !== "" && (
            <div className='result_NAV'>
                <div><h1>Result</h1></div>
                    <div className="cards_container">
                        {searchedBooks.map((book) => (
                            <Card 
                                key={book._id}
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
                                isFollowing={'flase'}
                            />
                        ))}
                    </div>
            </div>
            )}
        </div>
        
    );
}

export default Nav;