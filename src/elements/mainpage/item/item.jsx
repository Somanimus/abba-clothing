import React from 'react';
import './item.css'

const Item = () => {
    return (
        <div className='feed-item'>
           <img src="/media/itemPic.png" className='item-pic' alt="" /> 
           <div className="item-info-box">
               <div className='item-desc'>
                <p>Просьба не звонить, для уточнения наличия размера пишите на вотсап</p>

                </div> 
               <div className="item-bottom">
                <p>цена: <b>1000</b></p>

                <div className='item-button-box'>
                    <img src="/media/mail-icon.png" alt="" />
                    <img src="/media/bookmark-fixed.png" alt="" />
                </div>

               </div>
           </div>
        </div>
    );
};

export default Item;