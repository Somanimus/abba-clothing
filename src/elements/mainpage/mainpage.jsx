import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import Item from './item/item';
import './mainpage.css'

const MainPage = () => {
    const [categoryfilter, setCategoryfilter] = useState('')
    const [favors, setfavors] = useState([])
    const [query, setquery] = useState('')
   useEffect(() => {
     const getFavors = async function () {
        const URL = 'http://localhost:8000/api/favors'
        const response = await axios.get(URL)
        const data = response.data
        setfavors(data)
        console.log(data)
     } 
     getFavors()
      
    }, [])
    const [categories, setcategories] = useState([])
    useEffect(() => {
     const getCategories = async function () {
        const URL = 'http://localhost:8000/api/categories'
        const response = await axios.get(URL)
        const data = response.data
        setcategories(data)
     } 
     getCategories()
      
    }, [])
 
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

                    <input type="text" placeholder='search...' className='search'  onChange={ (e) => setquery(e.target.value) } />
            <div className='dropdown-categories-box dropdown' >
                <p>categories</p>
                <div className="dropdown-content">
                    <div>
                        <button value={''} onClick={e => setCategoryfilter(e.target.value)}>all</button>
                    </div>
                    {categories.map(function (item) {
                        return  (
                            <div key={item.id}>
                                <button onClick={e => setCategoryfilter(e.target.value)}  value={item.title}>{item.title}</button>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>


                </div>

                <div className="feed-content-box">
                    {favors.filter(item => item.category_title.includes(categoryfilter)).filter(item => item.title.toLowerCase().includes(query) || item.username.toLowerCase().includes(query)).map(function (item) {
                        return  (
                            <Item data={item} key={item.id}/>
                       )
                    }
                    )}
                </div>
                <div className="feed-nav-box">
                    <div>
                    </div>
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