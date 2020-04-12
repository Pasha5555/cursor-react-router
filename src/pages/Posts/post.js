import React from 'react';
import ikon from './img/oficial.png'

function Post(props){
    const {author: {name, photo, nickname}, content, image, date} = props;
    let comments = 400;
    let retweets = 85;
    let likes = 1200;
    let uploads = 30;
    
    return(
        <div className="Post">
            <div className="Ava_position">
                <img className='ava' src= {photo} alt=""/>
            </div>
            <div className="main_content">
                <div className='header_block' >
                    <div className="header_data" >
                        <div className="ikon_position">
                            <img className="ikon" src={ikon} alt=""/>
                        </div>
                        <h2>{name}</h2>
                        <h3>{nickname} {date}</h3>
                    </div>
                    <div className="message_post" >
                      <p>{content}</p>
                    </div>
                </div>
                <div className="photo_position">
                     <img  className="photo" src={image} alt=""/>
                </div>
                <div className="footer">
                      <span className="post_ikons"><i class="fa fa-comment"> <span className="ikon_txt">{comments}</span></i></span>
                      <span className="post_ikons"><i class="fa fa-retweet"> <span className="ikon_txt">{retweets}</span></i></span>
                      <span className="post_ikons"><i class="fas fa-heart"> <span className="ikon_txt">{likes}</span></i></span> 
                      <span className="post_ikons"><i class="fas fa-upload"> <span className="ikon_txt">{uploads}</span></i></span> 
                </div>
            </div>
        </div>
    );
};

export default Post;