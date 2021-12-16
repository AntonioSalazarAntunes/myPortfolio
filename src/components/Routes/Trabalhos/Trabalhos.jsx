import React from 'react';
import "./trabalhos.css";
import { getThumbnails } from '../../thumbnails';
import Thumbs from './Thumbs';
import { Link } from "react-router-dom";


function Trabalhos() {

    let thumbnails = getThumbnails();



    return (
        <div className="trabalhos">

            {thumbnails.map((novaImagem) => (
                <Link
                    to={`/${novaImagem.nome}`}
                    data={novaImagem}
                >

                    {<Thumbs
                        key={novaImagem.key}
                        url={novaImagem.url}
                        nome={novaImagem.nome}
                        titulo={novaImagem.titulo}
                        desc={novaImagem.desc}
                    />}
                </Link>

            ))}
        </div>
    )
}

export default Trabalhos
