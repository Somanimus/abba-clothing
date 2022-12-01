import React from 'react';
import './loginpage.css'

const Loginpage = () => {
    return (
        <div className='loginpage'>
           <div className="logincard">
            <h1 className='logo-text'>abba</h1>
            <input type="text" name="login"  placeholder="логин" id="login" />
            <input type="text" name="password" placeholder='пароль' id="password" />
            <button type="submit">войти</button>
            <a href="#" className="reg-link">гость \ регистрация</a>
            </div> 
        </div>
    );
};

export default Loginpage;