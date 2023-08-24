import '../Nav/style.css';
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import AddBook from '../../components/AddBook/index';

const Nav = () => {

    function Logout (){
        localStorage.removeItem("token");
        window.location.href = '/';
    }

    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleAddButtonClick = () => {
        setPopupVisibility(true);
    }

    return (
        <div className='nav'>
            {isPopupVisible && <AddBook onClose={() => setPopupVisibility(false)} />}
            <div className='leftSide'>
                <NavLink className={'text_decoration'} to={'/Home'}><div className="logo"><h1>ReadConnect   </h1></div></NavLink>
                <NavLink className={'text_decoration'} to={'/Recommended'}><div className="btn">Recommended</div></NavLink>
                <div className="btn" onClick={handleAddButtonClick}>Add Book</div>
            </div>
            
            <div className='rightSide'>
                <input type='text' className='searchbar' placeholder='Search books here...'></input>
                <div className="btn" onClick={Logout}>Logout</div>
            </div>
        </div>
    );
}

export default Nav;