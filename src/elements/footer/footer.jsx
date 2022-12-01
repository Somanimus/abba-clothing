import React from 'react';
import './footer.css'

const Footer = () => {
    return (
       <footer>
        <div className='footer-trademark footer-box'>
            <p className="footer-logo">abba</p>
            <p className="footer-trademark-middletext">2022 <span className='gray'>abba</span></p>
            <p className='footer-trademark-bottomtext'> все права защищены </p>
        </div>
        <div className='footer-links footer-box'>
            <a href="#">о нас </a>
            <a href="#">карта сайта</a>
            <a href="#">отзывы</a>
            <a href="#">свяжитесь с нами</a>
        </div>
        <div className='footer-numbers footer-box'>
            <a href="tel:+996705768584">+996705768584</a>
            <a href="tel:+996705768584">+996705768584</a>
        </div>
       </footer> 
    );
};

export default Footer;