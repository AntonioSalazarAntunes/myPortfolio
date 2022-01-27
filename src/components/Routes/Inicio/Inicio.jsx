import React from 'react';
import "./inicio.css";
import fotoPerfil from "../../../foto.png";
import Typewriter from "typewriter-effect";
import IconSoftware from './IconSoftware';
import { getSoftware, getCode, getLanguage } from './data'
import Timeline from "./Timeline/Timeline";


function Inicio() {

    let soft = getSoftware();
    let codigo = getCode();
    let idioma = getLanguage();


    return (

        <div className="inicio">
            <div className="apresent">
                <div className="esquerdo">
                    <img src={fotoPerfil} alt="foto" />
                </div>

                <div className="direito">
                    <h1>António Antunes</h1>
                    <div className="escrever">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Designer Gráfico")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Web Designer")
                                    .deleteAll()
                                    .typeString("Ilustrador")
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <hr className="filete" />
            <div className="skills">
                <h1>Skills</h1>
                <div className="skillsContainer">
                    <div className="software">
                        <h2>design</h2>
                        {soft.map((iconSoft) => (
                            <IconSoftware
                                icon={iconSoft.urlSW}
                                star1={iconSoft.urlSONE}
                                star2={iconSoft.urlTWO}
                                star3={iconSoft.urlTHREE}
                                star4={iconSoft.urlSTFOUR}
                                star5={iconSoft.urlSTFIVE}
                            />
                        ))}

                    </div>
                    <div className="software">
                        <h2>código</h2>
                        {codigo.map((iconCode) => (
                            <IconSoftware
                                icon={iconCode.urlCOD}
                                star1={iconCode.urlTWO}
                                star2={iconCode.urlSONE}
                                star3={iconCode.urlTHREE}
                                star4={iconCode.urlSTFOUR}
                                star5={iconCode.urlSTFIVE}
                            />
                        ))}

                    </div>
                    <div className="software">
                        <h2>idiomas</h2>
                        {idioma.map((iconLing) => (
                            <IconSoftware
                                icon={iconLing.urlLAN}
                                star1={iconLing.urlTWO}
                                star2={iconLing.urlSONE}
                                star3={iconLing.urlTHREE}
                                star4={iconLing.urlSTFOUR}
                                star5={iconLing.urlSTFIVE}

                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <hr className="filete" />
            <Timeline/>
           



            {/* ---------------------------------------------------------- */}
            <hr className="filete" />
            
    
            <div className="texto">
                <p>Sou <b> Designer de Comunicação </b> nas vertentes <b> Web e Gráfico</b>.
                    <br />
                    Sou meticuloso, responsável, organizado e acima de tudo, tenho uma paixão por tudo o que é visual.
                    <br />
                    Ultimamente, tenho vindo a desenvolver valências na aprendizagem de algumas linguagens como <b> HTML, CSS e Javascript </b>, as quais creio serem indispensáveis nesta área.
                    <br />
                    Sou entusiasta por <b> música, cinema </b> e fascinado pelo mundo à nossa volta, o que me levou a já ter tido algumas experiências internacionais em <b> Espanha </b> e na <b> Roménia </b>.
                    <br />
                    Esses episódios serviram para exponenciar o meu interesse em <b> geografia, geopolítica e linguística </b>.
                </p>
            </div>
        </div>
    )
}

export default Inicio


