
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import PostForm from './PostForm';
//import AllPost from './AllPost';
import Navbar from './Navbar.jsx';
import Post from './Post.jsx';
import  {useState} from 'react'

import Story from './Story.jsx';
import SideBox from './SideBox.jsx';

const AppConteiner = () => {

  const [hola,sethola] = useState(0)
   
    return (
    <div>
    	<Navbar/>
        <div className="main_container">
        <div className="page_content">
        <div className="main_content">
         <Story sk={hola}/>
         <Post/>
        </div>
        <SideBox/>
        </div>
        </div>
    </div>

)}

export default AppConteiner;