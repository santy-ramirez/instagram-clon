import './style.css'
import { useEffect, useState } from 'react';
import image from "../images/avatar.jpg";
import SideBoxImage from "./SideBoxImage"
import { Link } from "react-router-dom";

const SideBox = ( {data} )=>{
    
    return(
        <>
        <div className="sideBox">
            <div>
            <Link to="/perfil"> <img src={image}  className="sideBox_main_image" alt=""></img></Link>
         <div>
         <h3>santiago_Ramirez</h3>
         <p>@santy_dev</p>
         </div>
            </div>
            <h3>Suggestions For You</h3>
           
         <SideBoxImage data={data}/>
        </div>
        </>
    )
}

export default SideBox
