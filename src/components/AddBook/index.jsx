import React, { useState } from "react";
import '../AddBook/style.css'
import axios from 'axios';

const AddBook = ({ onClose }) =>{

    let [title, setTitle] = useState("");
    let [author, setAuthor] = useState("");
    let [genre, setGenre] = useState("");
    let [review, setReview] = useState("");
    let [image, setImage] = useState("");

    const submitForm = (e) => {
        e.preventDefault()

        const token = localStorage.getItem("token");
        const postData = {title, author, genre, review};
        console.log(postData)

        axios.post('http://127.0.0.1:5000/books/createBook', postData, {
            headers: {
                Authorization: `Bearer ${token}`,
                // 'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response);
            window.location.href = '/Home';
            
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="AddBook">
            <div className="AddBook_container">
                <h1 className="title" >Add Book</h1>
                <form encType = 'multipart/form-data' className="BookForm">
                    <div className="text_feild">
                        <label className="BookLabel">Book Name</label><br></br>
                        <input 
                        type="text" 
                        placeholder="Book Name"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        ></input> 
                    </div>
                    <div className="text_feild">
                        <label className="BookLabel">Author</label><br></br>
                        <input 
                        type="text" 
                        placeholder="Author"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        ></input> 
                    </div>
                    <div className="text_feild">
                        <label className="BookLabel">Genre</label><br></br>
                        <input 
                        type="text" 
                        placeholder="Genre"
                        required
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        ></input> 
                    </div>
                    <div className="text_feild">
                        <label className="BookLabel">Review</label><br></br>
                        <textarea 
                        type="text" 
                        placeholder="Review"
                        required
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        ></textarea> 
                    </div>
                    <div className="upload">
                        <label className="BookLabel">Image</label>
                        <label className="file-label">Choose an image<input 
                        type="file" 
                        onChange ={(e) => setImage(e.target.files[0])}
                        /></label>
                    </div>
                    <button className="BookAddbtn" onClick={submitForm}>Add</button>
                    <button className="BookCloebtn" onClick={onClose}>Close</button>
                </form>
            </div>  
        </div>
    );
} 

export default AddBook;