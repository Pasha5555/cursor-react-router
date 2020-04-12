import React from 'react';

import './post.css';
import Post from './post';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

function Posts() {

  return (
      <div>
        <h1>Posts</h1>
        <center>
            <div className="posts_">
                <Post author={{
                name: "Anakin Skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader"
            }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={" · 26 февр."}
            />
            </div>
            <div className="posts_">
                <Post author={{
                name: "Anakin Skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader"
            }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={" · 26 февр."}
            />
            </div>
            <div className="posts_">
                <Post author={{
                name: "Anakin Skywalker",
                photo: ANAKIN_IMAGE,
                nickname: "@dart_vader"
            }}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image={RAY_IMAGE}
            date={" · 26 февр."}
            />
            </div>
        </center>
    </div>
  )
}
export default Posts;