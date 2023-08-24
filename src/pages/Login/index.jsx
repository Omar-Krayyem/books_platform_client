import '../Login/style.css';
import { Link} from 'react-router-dom'
import React, { useState } from "react";
import axios from "axios"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async(e) => {
        e.preventDefault()

        const postData = {email, password};

        axios.post("http://127.0.0.1:5000/auth/login", postData)
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
        <div className='LoginPage'>
            <div className="login_form">
                <div className="form_header"><h1>LOGIN</h1></div>
                <div className="form_body">
                    <form>
                        <div className="text_feild">
                            <label>Email</label><br></br>
                            <input 
                            type="email" 
                            placeholder="example@gmail.com"
                            required=""
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            ></input>
                        </div>
                        <div className="text_feild">
                            <label>Password</label><br></br>
                            <input 
                            type="password"
                            placeholder="Password"
                            required=""
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            ></input> 
                        </div>
                        <input type="submit" className="btn" id="loginbtn" value="login" onClick={submitForm}></input>
                    </form>
                </div>
                <div className="form_bottom">Didn't have an account<Link to="/Signup">signup</Link></div>
            </div>
        </div>
    );
}

export default Login;