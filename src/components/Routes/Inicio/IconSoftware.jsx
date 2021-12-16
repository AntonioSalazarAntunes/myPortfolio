import React from 'react'


function IconSoftware(props) {
    
    return (
        <div className="photoshop">
            <div className="icon">
                <img src={props.icon} alt="icon" />
            </div>
            <div className="estrelas">
                <img src={props.star1} alt="star" />
                <img src={props.star2} alt="star" />
                <img src={props.star3} alt="star" />
                <img src={props.star4} alt="star" />
                <img src={props.star5} alt="star" />
            </div>
        </div>
    )
}

export default IconSoftware
