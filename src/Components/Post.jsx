import "./style.css";
import post_img from "../images/avatar.jpg"
import {useState} from 'react';


const corarojo ={
    'color' :'black'
   
} 

const Post = () => {
const [ todos , setTodos ] = useState([]);
const [color , setColor] = useState(corarojo)
console.log(corarojo)
function headleSubmit(event){
    event.preventDefault();
    const text = event.target['text'].value;
    setTodos(todos => todos.concat(text))
    event.target['text'].value="";
}

const hola = () =>{
    const corarojo2 ={
    'color' :'red'
   
}

    if (color){
        setColor(corarojo2)
    }else{
       return
    }
} 
    return (
        <>
            <div className="post_container">
                <div className="heading_part">
                    <img src={post_img} alt="profile_pic" className="profile_pic"></img>
                    <p className="name">santy_dev</p>
                </div>
                <div className="image_part">
                    <img src={localStorage.getItem('image')} alt="post_pic" className="post_pic"></img>
                </div>
                <div className="bottom_part">
                    <div>
                        <li onClick={hola}><i style={color} className="far fa-heart"></i></li>
                        <li><i className="fas fa-location-arrow"></i></li>
                        <li><i className="far fa-comment"></i></li>
                        <li><i className="fas fa-ellipsis-h"></i></li>
                    </div>
                    <div>
                        <img src={post_img}  alt="liked_by_pic" className="liked_by_pic"></img>
                        <p className="liked_by">Liked by &nbsp; <strong style={{ display: 'inline-block' }}> santy_raghav </strong> &nbsp; and &nbsp;<strong> 1,234,988&nbsp; </strong> others.</p>
                    </div>
                    <div>
                        <h4 >descripcion</h4>
                        <p >{localStorage.getItem('message')}</p>
                    </div>
                    <div>
                        <h4 >santy_dev</h4>
                    </div>
                    <div>
                        <h4 >otro nombre</h4>
                    </div>
                </div>
                <div className="comment_part">
                <form onSubmit={headleSubmit}>
                    <input id="new-todo" type="text" name="text"/>
                     <button>
                    coment
                    </button>
                    </form>
               
                   
                    {todos.map(item =>  <p>{item} </p> ) }
                   
                </div>
            </div>

        </>
    )
}

export default Post