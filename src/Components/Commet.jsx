import React from 'react';
import { useState } from 'react';
import post_img from "../images/avatar.jpg"


function Commet() {


    const [coment, setComent] = useState([]);


    function headleSubmit(event) {


        event.preventDefault();
        const text = event.target['text'].value;
        setComent(coment => coment.concat(text))
        event.target['text'].value = "";

    }

    return (
        <div className="comment_part">

            <form className="coment__form" onSubmit={headleSubmit}>
                <input className="input__coment" id="new-todo" placeholder="  Ingresa tu comentario" type="text"
                    name="text" /> <button className="button__coment">coment</button>
            </form>

            {coment.map(item => (
                <div key={item} className="coment__conteiner">
                    <img className="image__coment" src={post_img} alt="" />
                    <p>{item} </p>
                </div>
            ))}

        </div>
    );
}

export default Commet;