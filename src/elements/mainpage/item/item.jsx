import React from 'react';
import './item.css'

const Item = (props ) => {
    return (
        <div className='feed-item'>
           {props.data.photo === null ? "" : <img src={props.data.photo} className='item-pic' alt="" /> }
           <div className="item-info-box">
               <div className='item-desc'>
                <h2>{props.data.title}</h2>
                <p>{props.data.description}</p>

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