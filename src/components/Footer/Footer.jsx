import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <h4>Copyright António S.A. 2021</h4>
            <div className="redesSociais">    
                <a href="https://www.facebook.com/antonio.s.antunes.3" target="_blank"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" rel="noopener noreferrer" alt="facebook"/></a> 
                <a href="https://www.instagram.com/antonio.s.antunes.3" target="_blank"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" rel="noopener noreferrer" alt="instagram"/></a>
                <a href="https://www.behance.net/Dreamflight" target="_blank"><img src="https://img.icons8.com/color/48/000000/behance.png" rel="noopener noreferrer" alt="behance"/></a> 
                <a href="https://www.youtube.com/channel/UCM_v8OYOA6QA3BguqKE22xw" target="_blank"><img src="https://img.icons8.com/color/48/000000/youtube-play.png" rel="noopener noreferrer" alt="youtube"/></a>             
                <a href="https://www.linkedin.com/in/antoniosalazarantunes/" target="_blank"><img src="https://img.icons8.com/color/48/000000/linkedin.png" rel="noopener noreferrer" alt="linkedin"/></a>
            </div>
        </div>
    )
}

export default Footer

