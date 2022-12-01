import React from 'react';
import './iteminfo.css'

const ItemInfo = () => {
    return (
        <div className='item-info'>
           <div className="item-img-swipe">
            <div className="arrow left"></div>
            <div>       <img src="/media/bluecoat.png" alt="" />
                        <div className="img-bottom-text">
                            <p><img src="/media/eye-fix.png" alt="" />1987</p>
                            <p><img src="/media/heart-fix.png" alt="" />2098</p>
                        </div>
             </div>
            <div className="arrow right"></div>
           </div>
            <div className='circles-box'>
                <div className="circle circ-active"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>

            </div>
            <div className='item-text-box'>
                <div className="item-description">
                    <h1>Продаю новые детские боди carter’s производство гуанчжоу</h1>
                </div>
                <div className="item-properties">
                    <p className='txt-gray'>Цвет: <span className='txt-black'>Голубой</span> </p>
                    <p className='txt-gray'>Состояние: <span className='txt-black'>Новый</span> </p>
                    <p className='txt-gray'>Бренд: <span className='txt-black'>MALUK</span> </p>
                    <p className='txt-gray'>Доставка: <span className='txt-black'>Самовывоз</span> </p>
                </div>
            </div>
             
            
        </div>
    );
};

export default ItemInfo;