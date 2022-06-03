import React, {useState, useRef } from 'react';
//import { Link } from 'react-router-dom';
import './style.css';


  
const PostForm = ()=> {

let getDescripcion = useRef('');
let getImage = useRef('');



  const handleSubmit = (e) => {
    e.preventDefault();
    const descripcion = getDescripcion.current.value;
    const image = getImage.current.value;
    localStorage.setItem('descripcion', descripcion);
    localStorage.setItem('image', image);
    getDescripcion.current.value = '';
    getImage.current.value = '';
  }


  

  return (

    <div className='parentdiv'>
    <hr></hr>
      <h1 className='formTitulo'>Create a new Post</h1>
      <form onSubmit={handleSubmit} className='form'>
         <input className='inputfields' required type="text" 
         placeholder="Paste your image url here"
         ref={ getImage } 
         /><br></br>
         <br></br>
         <textarea className='inputfields' 
           required rows="5" cols="28" 
  
         placeholder="Enter DESCRIPCION" 
           ref={getDescripcion }/>
         <br /><br />
         <button className='postbtn'>Post</button>
      </form>
      <a href="/">
        <button className= 'gallery'>
          View home
        </button>
      </a>
    </div>
   );
}

export default PostForm;