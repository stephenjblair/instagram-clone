import React, { useState, useEffect } from 'react';
import Post from './Post';
import './App.css';
import { db } from './firebase'

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect runs a piece of code based on a specific condition

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);
  return (
    <div className="App">
      {/* Header */}
      <div className="app__header"> 
        <img 
        className="app__headerImage"src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
        alt="instagram-logo"
        /> 
        <h1>Let's build an Instagram clone!</h1>
      </div>
    
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      } 


      {/* Posts */}
      {/* Posts */}

    </div>
  );
}

export default App;
