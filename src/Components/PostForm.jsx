import React, {useState, Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


  
class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const descripcion = this.getDescripcion.value;
    const image = this.getImage.value;
    localStorage.setItem('descripcio', descripcion);
    localStorage.setItem('image', image);
    this.getDescripcion.value = '';
    this.getImage.value = '';
  }


  
render() {
  return (
    <div className='parentDiv'>
    <hr></hr>
      <h1>Create a new Post</h1>
      <form onSubmit={this.handleSubmit} className='formStyle'>
         <input className='inputFields' required type="text" 
         placeholder="Paste your image url here"
         ref={(input) => this.getImage = input}
         /><br></br>
         <br></br>
         <textarea className='inputFields' 
           required rows="5" cols="28" 
  
         placeholder="Enter DESCRIPCION" 
           ref={(input)=>this.getDescripcion = input}/>
         <br /><br />
         <button className='postBtnStyle'>Post</button>
      </form>
      <Link to='/'>
        <button className= 'galleryStyle'>
          View home
        </button>
      </Link>
    </div>
   );
}
}
export default PostForm;