import React from 'react';



function Thumbs(props) {

    return (
        <div className="thumbs">



            <img src={props.url} alt={props.nome} />

            <div className="contentor">

                <h3>{props.titulo}</h3>
                <p>{props.desc}</p>

            </div>


        </div>
    )
}

export default Thumbs;
