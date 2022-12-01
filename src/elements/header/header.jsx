import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <header>
            <div className='dropdown-categories-box dropdown' >
                <p>категории <i className="arrow down"></i></p>
                <div className="dropdown-content">

                </div>
            </div>

            <div className='dropdwon-misc-box dropdown'>
               <p>другое <i className="arrow down"></i></p>
                <div className="dropdown-content">
                    <a href="#">профиль</a>
                    <a href="#">КОНТАКТЫ</a>
                    <a href="#">КОНФЕНЕДЦИАЛ</a>
                    <a href="#">РЕКЛАМА</a>
                    <a href="#">УВЕДОМЛЕНИЯ</a>

                </div>
  
            </div>

            <div className='logo-box'>
                <p className="logo-text">abba</p>
            </div>

            <div className='contacts-box'>
                <p>+996705998877</p>
                <p>+996705768584</p>
            </div>

            <div className='notifications-button'>
                <img src="/media/mail-icon.png" alt="mail-icon" />
            </div>

            <div className='search-button'>
                <img src="/media/search-icon.png" alt="search-icon" />
            </div>

        </header>
   );
};

export default Header;