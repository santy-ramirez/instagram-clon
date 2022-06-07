import Navbar from './Navbar.jsx';
import './style.css';
import post_img from "../images/avatar.jpg"

const PerfilComponent = ( {data} )=>{
    
    return(
        <>
         <Navbar/>
        <div className="Box">
            
            <img src={post_img} className="sideBox_main_image" alt=""></img>
         <div className="conteinerrigth">
            <div className="config">
                <h1>sabty</h1> 
                <span>icon</span> <span>icon3</span>
            </div> 
            <div className="config">
                <h1>sabty</h1> 
                <span>icon</span> <span>icon3</span>
                </div> 


         </div>
        
           
         
        </div>
        <hr/>
        <div className="contenedor__image">
            {data.map(p => (
                <img className='imagen' src={p.id} alt="" />
            ))}
        </div>
        </>
    )
}

export default PerfilComponent;