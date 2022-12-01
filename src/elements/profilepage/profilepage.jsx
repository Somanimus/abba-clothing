import React from 'react';
import Item from '../mainpage/item/item';
import './profilepage.css'

const ProfilePage = () => {
    return (
        <div className='profile-page'>
           <div className="acc-info">
            <div className="acc-pic">
                <img src="/media/default-user.png" alt="user-avatar" />
                <p className='acc-name'>Темирбекова Мунара </p>
                <p className='acc-last-been'>был(а) в сети 30 мин назад</p>
            </div>
            <div className="acc-btn-box">
                <button className='btn-small'><img src="/media/plus.png" alt="" /></button>
                <button className='btn-wide'>Редактировать</button>
                <button className='btn-small'><img src="/media/gear.png" alt="" /></button>
            </div>
            </div> 

            <div className="usr-feed">
                <div className="usr-feed-sort">
                    <button className='usr-feed-btn usr-feed-btn-active'>Мои объявления</button>
                    <button className='usr-feed-btn '>Деактивированные</button>
                </div>
                <div className="usr-feed-box">
                    <Item/>
                    <Item/>
                    <Item/>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;