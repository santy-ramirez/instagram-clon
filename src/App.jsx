
import './App.css';

import React, {useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppConteiner from './Components/AppConteiner.jsx'
import PostForm from './Components/PostForm.jsx'

import PerfilComponent from './Components/PerfilComponent';







const initialList = [
  {
    id: 'https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg',
    name: 'Robin',
  },
  {
    id: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
    name: 'Dennis',
  },
  {
    id: 'https://www.gettyimages.es/gi-resources/images/500px/983703508.jpg',
    name: 'Dennis',
  },
];


  
const App = () => {

  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');
  const [name1, setName1] = useState('');
  const [dataUser, getdataUser] = useState([]);



  
    
  useEffect(() => {

      fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => getdataUser(data.results));
  
  },[]);



  function handleChange(event) {
    // track input field's state
    setName(event.target.value);
    

   

    
  }

 function handleChange2(event) {
    // track input field's state
    setName1(event.target.value);
    

   

    
  }
  function handleAdd(event) {
    event.preventDefault();
    const newList = list.concat({  id:name, name :name1 });

    setList(newList);
    setName('');
    setName1('');

  }
return (

    <div className="App">

<BrowserRouter windowr>
    <Routes>    
      <Route path="/"
       element={<AppConteiner
       name12={list}
       data ={dataUser}
       />} />
      <Route path="/post" 
      element={<PostForm 
      change1= {handleChange}
      change2= {handleChange2}
      name = {name}
      name1 ={name1} 
      add ={handleAdd}
      
      
      />} />
      <Route path="/perfil"
      element={<PerfilComponent/>} />
      </Routes>
    </BrowserRouter>
    

    </div>
    );
    };
  
export default App;
