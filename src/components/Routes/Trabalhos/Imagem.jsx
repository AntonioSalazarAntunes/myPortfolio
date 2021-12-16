import React from 'react';
import "./imagem.css";
import { useParams } from "react-router-dom";
import { getWork } from "../../thumbnails";


function Imagem() {

    let params = useParams();
    let work = getWork(params.imagemid);





    return (
        <div className="imagem">
            <div className="itemWrapper">
                <div className="itemContainer">
                    <h3>{params.imagemid}</h3>
                    <p><span>{work.ferramenta1}</span> <span>{work.ferramenta2}</span></p>
                </div>
                <div className="imageContainer">

                    <div className="container1">
                        <img src={work.imgUrl1} alt={work.alt1} />
                    </div>
                    <div className="container2">
                        <img src={work.imgUrl2} alt={work.alt2} />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Imagem
