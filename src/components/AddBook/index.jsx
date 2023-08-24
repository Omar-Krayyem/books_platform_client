import React, { useState } from "react";
import '../AddBook/style.css'
import axios from 'axios';

const AddBook = ({ onClose }) =>{

    let [name, setName] = useState("");
    let [author, setAuthor] = useState("");
    let [genre, setGenre] = useState("");
    let [review, setReview] = useState("");
    let [image, setImage] = useState("");

    const submitForm = (e) => {
        e.preventDefault()

        const token = localStorage.getItem("token");
        const postData = {name, author, image, review, genre};
        console.log(postData)

        axios.post('http://127.0.0.1:5000/books/CreateBook', postData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data);
            // let $token = response.data.token 
            // localStorage.setItem("token", $token);
            // console.log($token)
            // window.location.href = '/home';
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div class="AddBook">
            <div className="AddBook_container">
                <h1 class="title" >Add Book</h1>
                <form enctype = 'multipart/form-data' className="BookForm">
                    <div class="text_feild">
                        <label className="BookLabel">Book Name</label><br></br>
                        <input 
                        type="text" 
                        placeholder="Book Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ></input> 
                    </div>
                    <div class="text_feild">
                        <label className="BookLabel">Author</label><br></br>
                        <input 
                        type="text" 
                        placeholder="Author"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        ></input> 
                    </div>
                    <div class="text_feild">
                        <label className="BookLabel">Genre</label><br></br>
                        <input 
                        type="text" 
                        placeholder="Genre"
                        required
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        ></input> 
                    </div>
                    <div class="text_feild">
                        <label className="BookLabel">Review</label><br></br>
                        <textarea 
                        type="text" 
                        placeholder="Review"
                        required
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        ></textarea> 
                    </div>
                    <div class="upload">
                        <label className="BookLabel">Image</label>
                        <label class="file-label">Choose an image<input 
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