import React from 'react';

import "./photos.css";
import photo3 from './photos/3.jpg'
import photo4 from './photos/4.jpg'
import photo5 from './photos/5.jpg'
import photo6 from './photos/6.jpg'
import photo7 from './photos/7.jpg'
import photo8 from './photos/8.jpg'
import photo9 from './photos/9.jpg'

export default function Photos(){
    return(
        <div>
            <h1>Gallery</h1>
            <br></br>
            <img className="gallery_photo" src="https://99px.ru/sstorage/53/2017/11/tmb_214170_942424.jpg" width="500px" height="500px" alt=""/>
            <img className="gallery_photo" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80" width="500px" height="500px" alt=""/>
            <img className="gallery_photo" src={photo3} width="500px" alt=""/>
            <img className="gallery_photo" src={photo4} width="500px" alt=""/>
            <img className="gallery_photo" src={photo5} width="500px" alt=""/>
            <img className="gallery_photo" src={photo6} width="500px" alt=""/>
            <img className="gallery_photo" src={photo7} width="500px" alt=""/>
            <img className="gallery_photo" src={photo8} width="500px" alt=""/>
            <img className="gallery_photo" src={photo9} width="500px" alt=""/>
        </div>
    )
}