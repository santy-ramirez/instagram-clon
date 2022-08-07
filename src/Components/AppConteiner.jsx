import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Post from './Post.jsx';
import Story from './Story.jsx';
import SideBox from './SideBox.jsx';

const AppConteiner = ({ dato, data }) => {



  return (
    <div>
      <Navbar />
      <div id='con' className="main_container">
        <div className="page_content">
          <div className="main_content">
            <Story />
            <Post dato={dato} />
          </div>
          <SideBox data={data} />
        </div>
      </div>
    </div>

  )
}

export default AppConteiner;