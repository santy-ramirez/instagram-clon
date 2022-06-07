import './style.css'
import { useEffect, useState } from 'react';
import image from "../images/avatar.jpg";
import SideBoxImage from "./SideBoxImage"

const SideBox = ( {data} )=>{
    
    return(
        <>
        <div className="sideBox">
            <div>
            <img src={image}  className="sideBox_main_image" alt=""></img>
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
