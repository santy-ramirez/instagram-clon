import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Post from './Post.jsx';
import Story from './Story.jsx';
import SideBox from './SideBox.jsx';

const AppConteiner = ({dato, data}) => {

  const [hola,sethola] = useState(0)
   
    return (
    <div>
    	<Navbar/>
        <div id='con' className="main_container">
        <div className="page_content">
        <div className="main_content">
         <Story sk={hola}/>
         <Post dato={dato}  />
        </div>
        <SideBox data={data} />
        </div>
        </div>
    </div>

)}

export default AppConteiner;