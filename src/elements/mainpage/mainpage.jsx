import React from 'react';
import Item from './item/item';
import './mainpage.css'

const MainPage = () => {
    return (
       <main>
            <div className='intro-section'>

                <img src="/media/banner.png" className='intro-banner' alt="" />
                <div className='phone-box'>
                   <img src="/media/phone2.png" className='phone-pic' alt="" />
                   <div className='phone-text-box'>
                    <p className="logo-text">abba</p>
                    <button className='button-text'> войти </button>
                    <p className="regs-text"> гость / регистрация </p>
                   </div>
               </div>

                <div className='intro-text-box'>
                    <h1>abba</h1>
                    <p>Сервис обявлении для вашей рекламы и продажы вещей</p>
                </div>
            </div>
            <div className='feed-section'>
                <div className="feed-filter-box">
                    <button>Новые</button>

                    <button className='button-active'>Лента</button>

                    <button>Популярные</button>
                </div>

                <div className="feed-content-box">
                   <Item/> 
                   <Item/> 
                   <Item/> 
                   <Item/> 
                   <Item/> 
                   <Item/> 
                   <Item/> 
                   <Item/> 
                   <Item/> 
                   <Item/> 
                   <Item/> 
                   <Item/> 
                </div>
                <div className="feed-nav-box">
                    <div></div>
                    <div className="nav-btn-box">
                    <button className="feed-button nav-btn-active">1</button>
                    <button className="feed-button">2</button>
                    <button className="feed-button">3</button>
                    <button className="feed-button">4</button>
                    <button className="feed-button">5</button>
 
                    </div>
                    <div className='nav-social-box'>
                        <a href=""><img src="/media/vk.png" alt="" /></a>
                        <a href=""><img src="/media/facebook.png" alt="" /></a>
                        <a href=""><img src="/media/instagram.png" alt="" /></a>
                        <a href=""><img src="/media/telegram.png" alt="" /></a>
                    </div>
               </div>

            </div>
       </main> 
    );
};

export default MainPage;