
//import { Link } from 'react-router-dom';
import './style.css';
import { Link } from "react-router-dom";
import Navbar from './Navbar.jsx';


const PostForm = ({ change1, change2, name, name1, add }) => {






  return (

    <div className='parentdiv'>
      <Navbar />

      <h1 className='formTitulo'>Create a new Post</h1>

      <form onSubmit={add} className='form'>
        <input className='inputfields' required type="text"
          placeholder="Paste your image url here"
          onChange={change1}
          value={name}
        />
        <br /><br />
        <input className='inputfields' required type="text"
          placeholder=" Description"
          onChange={change2}
          value={name1}
        />


        <br /><br />
        <button className='postbtn'>Post</button>
      </form>
      <Link to="/">
        <button className='gallery'>
          View home
        </button></Link>

    </div>
  );
}

export default PostForm;