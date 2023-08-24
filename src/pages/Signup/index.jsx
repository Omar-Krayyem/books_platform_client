import '../Signup/style.css';
import {Link} from 'react-router-dom'
import React, { useState } from "react";
import axios from "axios"

const Signup = () => {

    const [username, setUSername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async(e) => {
        e.preventDefault()

        const postData = {username, email, password};

        console.log(postData)

        await axios.post("http://127.0.0.1:5000/auth/register", postData)
        .then(response => {
            console.log(response.data);
            let $token = response.data.token 
            localStorage.setItem("token", $token);
            console.log($token)
            window.location.href = '/Home';
        })
        .catch(error => {
            console.log(error);
        });
    }


    return (
        <div className='SignupPage'>
            <div className="signup_form">
                <div className="form_header"><h1>SIGNUP</h1></div>
                <div className="form_body">
                    <form>
                        <div className="text_feild">
                            <label>Username</label><br></br>
                            <input 
                            type="text" 
                            placeholder="Username" 
                            required
                            onChange={(e) => setUSername(e.target.value)}
                            value={username}
                            ></input>
                        </div>
                        <div className="text_feild">
                            <label>Email</label><br></br>
                            <input 
                            type="email"
                            placeholder="example@gmail.com" 
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            ></input> 
                        </div>
                        <div className="text_feild">
                            <label>Password</label><br></br>
                            <input 
                            type="password"
                            placeholder="Password" 
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            ></input>
                        </div>
                        <label id="error" className="error"></label>
                        <input type="submit" className="btn" id="signupbtn" value="Signup" onClick={submitForm}></input>
                    </form>
                </div>
                <div className="form_bottom">Already have an account<Link to="/">login</Link></div>
            </div>
        </div>
    );
}

export default Signup;